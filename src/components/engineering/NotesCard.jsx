import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Video,
  FileQuestion,
} from "lucide-react";


const NotesCard = ({
  id,
  title,
  description,
  type = "PDF",
  subject,
  unit,
  fileUrl,
  fileSize,
}) => {

  // Select icon based on material type

  const getIcon = () => {

    switch (type.toLowerCase()) {

      case "video":
        return <Video size={24} />;

      case "question paper":
        return <FileQuestion size={24} />;

      case "notes":
        return <BookOpen size={24} />;

      default:
        return <FileText size={24} />;

    }

  };


  return (

    <div
      className="
        group
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-xl
      "
    >

      {/* Top Section */}

      <div
        className="
          flex
          items-start
          gap-4
        "
      >

        {/* Icon */}

        <div
          className="
            shrink-0
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            bg-blue-500/10
            border
            border-blue-500/20
            text-blue-400
          "
        >

          {getIcon()}

        </div>


        {/* Title */}

        <div
          className="
            min-w-0
            flex-1
          "
        >

          <h3
            className="
              text-base
              font-bold
              text-white
              line-clamp-2
              group-hover:text-blue-400
              transition
            "
          >

            {title}

          </h3>


          {/* Type */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
              mt-2
            "
          >

            <span
              className="
                px-2
                py-1
                rounded-md
                bg-slate-800
                text-xs
                text-blue-400
              "
            >

              {type}

            </span>


            {fileSize && (

              <span
                className="
                  text-xs
                  text-gray-500
                "
              >

                {fileSize}

              </span>

            )}

          </div>

        </div>

      </div>



      {/* Subject / Unit */}

      {(subject || unit) && (

        <div
          className="
            flex
            flex-wrap
            gap-2
            mt-4
          "
        >

          {subject && (

            <span
              className="
                text-xs
                text-gray-400
                bg-slate-800
                px-3
                py-1
                rounded-lg
              "
            >

              📚 {subject}

            </span>

          )}


          {unit && (

            <span
              className="
                text-xs
                text-gray-400
                bg-slate-800
                px-3
                py-1
                rounded-lg
              "
            >

              📖 Unit {unit}

            </span>

          )}

        </div>

      )}



      {/* Description */}

      {description && (

        <p
          className="
            text-sm
            text-gray-400
            leading-relaxed
            mt-4
            line-clamp-2
          "
        >

          {description}

        </p>

      )}



      {/* Bottom Actions */}

      <div
        className="
          flex
          items-center
          gap-3
          mt-5
          pt-4
          border-t
          border-slate-800
        "
      >

        {/* View */}

        {fileUrl && (

          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              inline-flex
              items-center
              justify-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-slate-800
              hover:bg-slate-700
              text-gray-300
              hover:text-white
              text-sm
              font-semibold
              transition
            "
          >

            <ExternalLink size={17} />

            View

          </a>

        )}



        {/* Download */}

        {fileUrl && (

          <a
            href={fileUrl}
            download
            className="
              flex-1
              inline-flex
              items-center
              justify-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              text-white
              text-sm
              font-semibold
              transition
            "
          >

            <Download size={17} />

            Download

          </a>

        )}

      </div>

    </div>

  );

};


export default NotesCard;
