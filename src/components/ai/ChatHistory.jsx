import {
  MessageCircle,
  Plus,
  Trash2,
  Clock,
} from "lucide-react";


const ChatHistory = ({
  chats = [],
  activeChatId,
  onSelectChat,
  onNewChat,
  onDeleteChat,
}) => {


  return (

    <aside
      className="
        w-full
        lg:w-72
        shrink-0
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        overflow-hidden
      "
    >


      {/* Header */}

      <div
        className="
          p-4
          border-b
          border-slate-800
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            mb-4
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <MessageCircle
              size={19}
              className="text-purple-400"
            />

            <h2
              className="
                font-bold
                text-white
              "
            >

              Chat History

            </h2>

          </div>

        </div>



        {/* New Chat Button */}

        <button
          type="button"
          onClick={onNewChat}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            px-4
            py-3
            rounded-xl
            bg-purple-600
            hover:bg-purple-500
            text-white
            text-sm
            font-semibold
            transition
          "
        >

          <Plus size={18} />

          New Chat

        </button>

      </div>



      {/* Chat List */}

      <div
        className="
          max-h-[500px]
          overflow-y-auto
          p-3
          space-y-2
        "
      >


        {/* Empty State */}

        {chats.length === 0 && (

          <div
            className="
              py-10
              text-center
            "
          >

            <MessageCircle
              size={32}
              className="
                mx-auto
                text-gray-700
                mb-3
              "
            />


            <p
              className="
                text-sm
                text-gray-500
              "
            >

              No conversations yet

            </p>


            <p
              className="
                text-xs
                text-gray-600
                mt-1
              "
            >

              Start a new chat

            </p>

          </div>

        )}



        {/* Chat Items */}

        {chats.map((chat) => (

          <div
            key={chat.id}
            className={`
              group
              flex
              items-center
              gap-2
              p-3
              rounded-xl
              cursor-pointer
              transition
              ${
                activeChatId === chat.id
                  ? "bg-purple-500/10 border border-purple-500/20"
                  : "hover:bg-slate-800"
              }
            `}
            onClick={() =>
              onSelectChat?.(chat.id)
            }
          >


            {/* Chat Icon */}

            <div
              className="
                shrink-0
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-lg
                bg-slate-800
                text-gray-400
              "
            >

              <MessageCircle size={17} />

            </div>



            {/* Chat Information */}

            <div
              className="
                min-w-0
                flex-1
              "
            >

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-300
                  truncate
                "
              >

                {chat.title ||
                  "New Conversation"
                }

              </p>


              <div
                className="
                  flex
                  items-center
                  gap-1
                  mt-1
                  text-xs
                  text-gray-600
                "
              >

                <Clock size={11} />

                {chat.date || "Recently"}

              </div>

            </div>



            {/* Delete Button */}

            <button
              type="button"
              onClick={(event) => {

                event.stopPropagation();

                onDeleteChat?.(chat.id);

              }}
              className="
                shrink-0
                w-8
                h-8
                flex
                items-center
                justify-center
                rounded-lg
                text-gray-600
                opacity-0
                group-hover:opacity-100
                hover:text-red-400
                hover:bg-red-500/10
                transition
              "
              aria-label="Delete chat"
            >

              <Trash2 size={15} />

            </button>

          </div>

        ))}

      </div>

    </aside>

  );

};


export default ChatHistory;
