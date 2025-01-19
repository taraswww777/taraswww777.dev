import { dataContacts } from "src/__data";
import { FaIcon } from "src/ui/FaIcon";
import { NON_BREAK_SPACE } from 'src/constants/common';


export const PageFooter = () => {
  const length = dataContacts.length;

  return (
    <div className="w-full py-2.5 flex gap-x-3 gap-y-2 flex-wrap justify-center">
      {(dataContacts).map(({ href, code, text, icon }, index) => {
        const isNeedShowText = length === index + 1;

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
            {isNeedShowText ? (<>{NON_BREAK_SPACE}{text}</>) : null}
          </a>
        );
      })}
    </div>
  );
}
