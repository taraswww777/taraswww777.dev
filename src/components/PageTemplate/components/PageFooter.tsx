import { dataContacts } from "src/__data";
import { FaIcon } from "src/ui/FaIcon";
import { YaMetricInformer } from '../../metrics/YaMetricInformer';

interface Contact {
  href: string,
  code: string,
  text: string,
  icon: string
}

export const PageFooter = () => {
  return (
    <div className="w-full py-2.5 flex gap-x-3 gap-y-2 flex-wrap justify-center">
      {(dataContacts as Contact[]).map(({ href, code, text, icon }) => (
        <a
          key={code}
          href={href}
          id={code}
          title={text}
          target="_blank"
          className="btn btn-link btn-light"
        >
          <FaIcon iconName={icon} />&nbsp;{text}
        </a>
      ))}
      <YaMetricInformer />
    </div>
  );
}
