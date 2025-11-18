import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hello! Welcome to LJA Power Limited Co. How can we assist you today? Feel free to ask about our services, products, or schedule a consultation.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: generateBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    if (
      lowerInput.includes("service") ||
      lowerInput.includes("maintenance") ||
      lowerInput.includes("what do you offer")
    ) {
      return "We offer comprehensive generator services including:\n• Preventive Maintenance\n• ATS Installation\n• Controller Conversion\n• Troubleshooting & Diagnostics\n• Delivery & Installation\n\nWould you like to know more about any specific service?";
    }

    if (lowerInput.includes("emergency") || lowerInput.includes("urgent")) {
      return "We have 24/7 emergency support available! Our average response time is under 2 hours. Please call us directly for immediate assistance, or I can help you schedule an emergency service call.";
    }

    if (
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("how much")
    ) {
      return "Our pricing depends on the specific service and your requirements. I'd recommend scheduling a consultation with our experts who can provide a customized quote. Would you like to schedule a call?";
    }

    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("call") ||
      lowerInput.includes("phone")
    ) {
      return "You can reach us through multiple channels:\n• Schedule a consultation through our Contact page\n• Call us for immediate assistance\n• Email us with your inquiry\n\nWould you like me to help you with anything else?";
    }

    if (
      lowerInput.includes("product") ||
      lowerInput.includes("generator") ||
      lowerInput.includes("equipment")
    ) {
      return "We work with high-quality generator systems and equipment. Visit our Products page to see our current offerings and specifications. Need help finding the right equipment for your needs?";
    }

    if (
      lowerInput.includes("experience") ||
      lowerInput.includes("about") ||
      lowerInput.includes("who are you")
    ) {
      return "LJA Power Limited Co. has over 15 years of experience in generator services. We've installed 500+ systems and maintain a 99.5% uptime rate. Our certified technicians provide expert solutions for all your power generation needs.";
    }

    if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
      return "You're welcome! Is there anything else I can help you with regarding our services or products?";
    }

    return "Thank you for your question! That's a great inquiry. For more detailed information, I recommend visiting our Services or Products pages, or feel free to schedule a consultation with our team. Is there anything specific I can help you with?";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-border flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">LJA Power Support</h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4 space-y-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap text-sm ${
                      message.type === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 text-foreground rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-foreground px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="text-sm"
              />
              <Button
                type="submit"
                size="sm"
                disabled={isLoading || !inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
