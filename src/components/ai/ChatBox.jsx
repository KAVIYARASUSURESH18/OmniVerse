import { useState } from "react";

import {
  Send,
  Trash2,
  Bot,
  User,
  LoaderCircle,
} from "lucide-react";

import MessageBubble from "./MessageBubble";
import MessageBubble from "./MessageBubble";


const ChatBox = () => {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);


  // Send Message

  const handleSend = async () => {

    const trimmedMessage = message.trim();

    // Prevent empty message

    if (!trimmedMessage || loading) {
      return;
    }


    // Add User Message

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };


    setMessages((previousMessages) => [

      ...previousMessages,

      userMessage,

    ]);


    // Clear Input

    setMessage("");


    // Start Loading

    setLoading(true);


    /*
      Temporary AI Response

      Later:
      Backend API / AI API
      connect here.
    */

    setTimeout(() => {

      const aiMessage = {

        id: Date.now() + 1,

        role: "assistant",

        content:
          "Hello! I'm Omni AI. Your message was received successfully. AI API integration will be connected here.",

      };


      setMessages((previousMessages) => [

        ...previousMessages,

        aiMessage,

      ]);


      setLoading(false);

    }, 1000);

  };



  // Handle Keyboard

  const handleKeyDown = (event) => {

    // Enter = Send

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      handleSend();

    }

  };



  // Clear Chat

  const handleClearChat = () => {

    setMessages([]);

  };


  return (

    <div
      className="
        w-full
        max-w-4xl
        mx-auto
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        overflow-hidden
        shadow-2xl
      "
    >


      {/* Chat Header */}

      <div
        className="
          flex
          items-center
          justify-between
          px-5
          py-4
          border-b
          border-slate-800
        "
      >

        {/* AI Info */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-blue-600
              to-purple-600
            "
          >

            <Bot size={21} />

          </div>


          <div>

            <h3
              className="
                font-bold
                text-white
              "
            >

              Omni AI

            </h3>


            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                text-gray-500
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-500
                "
              />

              Ready to help

            </div>

          </div>

        </div>



        {/* Clear Chat */}

        {messages.length > 0 && (

          <button
            type="button"
            onClick={handleClearChat}
            className="
              flex
              items-center
              gap-2
              px-3
              py-2
              rounded-lg
              text-sm
              text-gray-400
              hover:text-red-400
              hover:bg-red-500/10
              transition
            "
          >

            <Trash2 size={16} />

            <span className="hidden sm:inline">

              Clear

            </span>

          </button>

        )}

      </div>



      {/* Messages Area */}

      <div
        className="
          min-h-[350px]
          max-h-[550px]
          overflow-y-auto
          p-5
          space-y-4
        "
      >


        {/* Empty State */}

        {messages.length === 0 && !loading && (

          <div
            className="
              min-h-[300px]
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >

            <div
              className="
                w-16
                h-16
                flex
                items-center
                justify-center
                rounded-2xl
                bg-purple-500/10
                text-purple-400
                mb-4
              "
            >

              <Bot size={32} />

            </div>


            <h3
              className="
                text-xl
                font-bold
                text-white
                mb-2
              "
            >

              How can I help you?

            </h3>


            <p
              className="
                max-w-md
                text-sm
                text-gray-500
              "
            >

              Ask me about programming,
              engineering subjects, study topics,
              or anything you want to learn.

            </p>

          </div>

        )}



        {/* Messages */}

        {messages.map((item) => (

          <MessageBubble
            key={item.id}
            role={item.role}
            content={item.content}
          />

        ))}



        {/* Loading */}

        {loading && (

          <div
            className="
              flex
              items-center
              gap-3
              text-gray-400
            "
          >

            <div
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-xl
                bg-purple-500/10
                text-purple-400
              "
            >

              <Bot size={18} />

            </div>


            <div
              className="
                flex
                items-center
                gap-2
                px-4
                py-3
                rounded-2xl
                bg-slate-800
              "
            >

              <LoaderCircle
                size={16}
                className="animate-spin"
              />

              <span className="text-sm">

                Omni AI is thinking...

              </span>

            </div>

          </div>

        )}

      </div>



      {/* Input Area */}

      <div
        className="
          p-4
          border-t
          border-slate-800
          bg-slate-950/50
        "
      >

        <div
          className="
            flex
            items-end
            gap-3
          "
        >

          {/* Input */}

          <textarea
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask Omni AI anything..."
            rows={1}
            disabled={loading}
            className="
              flex-1
              min-h-[48px]
              max-h-[140px]
              resize-none
              bg-slate-800
              border
              border-slate-700
              rounded-2xl
              px-4
              py-3
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-purple-500
              transition
              disabled:opacity-50
            "
          />


          {/* Send Button */}

          <button
            type="button"
            onClick={handleSend}
            disabled={
              !message.trim() ||
              loading
            }
            className="
              shrink-0
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-2xl
              bg-purple-600
              hover:bg-purple-500
              text-white
              transition
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
            aria-label="Send message"
          >

            {loading ? (

              <LoaderCircle
                size={20}
                className="animate-spin"
              />

            ) : (

              <Send size={20} />

            )}

          </button>

        </div>


        {/* Helper Text */}

        <p
          className="
            mt-2
            px-1
            text-xs
            text-gray-600
          "
        >

          Press Enter to send • Shift + Enter for a new line

        </p>

      </div>

    </div>

  );

};


export default ChatBox;
