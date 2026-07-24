import {
  Bot,
  User,
  Copy,
  Check,
} from "lucide-react";

import { useState } from "react";


const MessageBubble = ({
  role,
  content,
}) => {

  const [copied, setCopied] = useState(false);


  // Check whether message is from user

  const isUser = role === "user";


  // Copy message

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(
        content
      );

      setCopied(true);


      setTimeout(() => {

        setCopied(false);

      }, 1500);

    } catch (error) {

      console.error(
        "Failed to copy message:",
        error
      );

    }

  };


  return (

    <div
      className={`
        flex
        items-start
        gap-3
        ${
          isUser
            ? "justify-end"
            : "justify-start"
        }
      `}
    >

      {/* AI Avatar */}

      {!isUser && (

        <div
          className="
            shrink-0
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-blue-600
            to-purple-600
            text-white
          "
        >

          <Bot size={18} />

        </div>

      )}



      {/* Message Content */}

      <div
        className={`
          max-w-[80%]
          sm:max-w-[70%]
          ${
            isUser
              ? "items-end"
              : "items-start"
          }
          flex
          flex-col
        `}
      >

        {/* Message Bubble */}

        <div
          className={`
            px-4
            py-3
            rounded-2xl
            text-sm
            leading-relaxed
            whitespace-pre-wrap
            ${
              isUser
                ? "bg-purple-600 text-white rounded-br-md"
                : "bg-slate-800 text-gray-200 rounded-bl-md"
            }
          `}
        >

          {content}

        </div>



        {/* Message Actions */}

        <div
          className={`
            flex
            items-center
            gap-2
            mt-2
            ${
              isUser
                ? "justify-end"
                : "justify-start"
            }
          `}
        >

          {/* Role */}

          <span
            className="
              text-[11px]
              text-gray-600
            "
          >

            {isUser
              ? "You"
              : "Omni AI"
            }

          </span>



          {/* Copy Button */}

          {!isUser && (

            <button
              type="button"
              onClick={handleCopy}
              className="
                inline-flex
                items-center
                gap-1
                px-2
                py-1
                rounded-md
                text-[11px]
                text-gray-600
                hover:text-gray-300
                hover:bg-slate-800
                transition
              "
              aria-label="Copy message"
            >

              {copied ? (

                <>
                  <Check size={12} />

                  Copied

                </>

              ) : (

                <>
                  <Copy size={12} />

                  Copy

                </>

              )}

            </button>

          )}

        </div>

      </div>



      {/* User Avatar */}

      {isUser && (

        <div
          className="
            shrink-0
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-xl
            bg-slate-700
            text-gray-300
          "
        >

          <User size={18} />

        </div>

      )}

    </div>

  );

};


export default MessageBubble;
