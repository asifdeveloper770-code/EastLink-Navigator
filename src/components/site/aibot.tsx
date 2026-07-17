import { useState, useRef, useEffect } from "react";
import { chatWithAI } from "@/lib/chat.server";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function AIBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { 
            role: "assistant",
            content:
                "Welcome to EastLink Logistics! I can help with our shipping services, freight solutions, office locations, and general company information. How may I assist you today?"
        },
    ]);
const [input, setInput] = useState("");
const [isLoading, setIsLoading] = useState(false);
const chatEndRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
        role: "user",
        content: input,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
        const reply = await chatWithAI({
            data: {
                messages: updatedMessages,
            },
        });

        setMessages([
            ...updatedMessages,
            {
                role: "assistant",
                content: reply,
            },
        ]);
    } catch (error) {
        console.error(error);

        setMessages([
            ...updatedMessages,
            {
                role: "assistant",
                content:
                    "Sorry, I'm having trouble connecting right now. Please try again later.",
            },
        ]);
    } finally {
        setIsLoading(false);
    }
};

return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-white">
        {/* Chat Toggle Button */}
        {!isOpen && (
            <button
                onClick={() => setIsOpen(true)}
                className="flex h-14 w-28 items-center justify-center rounded-full bg-gradient-gold px-3 py-3.5 border border-neutral-800 text-navy font-bold shadow-xl hover:bg-neutral-800 transition-all duration-300 group"
            > Chat With
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 group-hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
                </svg>
            </button>
        )}

        {/* Chat Window */}
        {isOpen && (
            <div className="flex h-[500px] w-[360px] flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden transition-all duration-300 sm:w-[400px]">
                {/* Header */}
                <div className="flex items-center justify-between bg-neutral-900 px-4 py-3.5 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <h3 className="font-medium tracking-wide text-sm uppercase text-neutral-300">AI Assistant</h3>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l18 18" />
                        </svg>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === "user"
                                    ? "bg-white text-black rounded-tr-none"
                                    : "bg-neutral-900 text-neutral-200 border border-neutral-800 rounded-tl-none"
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-neutral-800 bg-neutral-900/50 flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about shipping, logistics, or tracking..."
                        className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-neutral-700 transition-colors placeholder-neutral-500"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-white text-black font-medium text-sm px-4 rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:hover:bg-white"
                    >
                        Send
                    </button>
                </form>
            </div>
        )}
    </div>
);
}