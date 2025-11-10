import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatSection() {
  const ref = useRef(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Sou a IA do Vitor Emanuel. Como posso ajudá-lo?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  useEffect(() => {
    if (messages.length > 1) scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      // 🔥 Agora chamando a API hospedada no Render
      const response = await fetch('https://ai-api-k35z.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        throw new Error(`Erro da API: ${response.status}`);
      }

      const data = await response.json();

      const aiResponse: Message = {
        id: messages.length + 2,
        text: data.reply || 'Desculpe, não consegui processar sua mensagem.',
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);

      const errorResponse: Message = {
        id: messages.length + 2,
        text: '⚠️ Erro de conexão com o servidor. Tente novamente mais tarde.',
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="chat" className="relative min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-white mb-4">
            Chat com <span className="text-[#FF0000]">IA</span>
          </h2>
          <p className="text-center text-[#CFCFCF] mb-12">
            Converse comigo através da IA e saiba mais sobre meu trabalho!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/60 backdrop-blur-md border border-[#B71C1C]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(183,28,28,0.3)]"
        >
          {/* Header */}
          <div className="bg-[#B71C1C]/20 border-b border-[#B71C1C]/30 px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF0000]/20 border border-[#FF0000]/50 rounded-full flex items-center justify-center">
              <Bot className="text-[#FF0000]" size={20} />
            </div>
            <div>
              <h3 className="text-white">Vitor AI Assistant</h3>
              <p className="text-xs text-[#4CAF50]">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-[#B71C1C]/20 border border-[#B71C1C]/50' 
                      : 'bg-[#4CAF50]/20 border border-[#4CAF50]/50'
                  }`}>
                    {message.sender === 'user' ? (
                      <User size={16} className="text-[#B71C1C]" />
                    ) : (
                      <Bot size={16} className="text-[#4CAF50]" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-[#B71C1C]/30 border border-[#B71C1C]/50 text-white'
                        : 'bg-[#FF0000]/20 border border-[#FF0000]/50 text-[#CFCFCF]'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#FF0000]/20 border border-[#FF0000]/50 rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-[#FF0000]" />
                  </div>
                  <div className="bg-[#FF0000]/20 border border-[#FF0000]/50 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-[#FF0000] rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#B71C1C]/30 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-[#0A0A0A]/50 border border-[#B71C1C]/30 rounded-lg px-4 py-3 text-white placeholder-[#CFCFCF]/50 focus:outline-none focus:border-[#4CAF50]/50 focus:ring-2 focus:ring-[#4CAF50]/20 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 bg-[#FF0000]/20 border border-[#FF0000]/50 rounded-lg text-white transition-all duration-300 hover:bg-[#FF0000]/40 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
