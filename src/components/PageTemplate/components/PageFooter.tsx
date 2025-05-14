import { dataContacts } from "src/__data";
import { FaIcon } from "src/ui/FaIcon";

export const PageFooter = () => {

  return (
    <div className="w-full py-2.5 flex gap-x-3 gap-y-2 flex-wrap justify-center">
      {(dataContacts).map(({ href, code, text, icon }) => {
        return (
          <a
            key={code}
            href={href}
            id={code}
            title={text}
            target="_blank"
            className="btn btn-link btn-light"
          >
            <FaIcon iconName={icon} />
          </a>
        );
      })}
    </div>
  );
}
