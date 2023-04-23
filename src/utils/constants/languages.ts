import JavascriptIcon from '../../assets/images/javascript.png';
import NodejsIcon from '../../assets/images/nodejs.png';
import ReactIcon from '../../assets/images/react.png';
import TypescriptIcon from '../../assets/images/typescript.png';
import PythonIcon from '../../assets/images/python.png';
import HtmlIcon from '../../assets/images/html.png';
export const languages = [
  {
    name: 'Html',
    icon: HtmlIcon.src,
    isDisabled: false,
    lang: 'html',
    comingSoon: false,
  },
  {
    name: 'Javascript',
    icon: JavascriptIcon.src,
    isDisabled: false,
    lang: 'js',
    comingSoon: false,
  },
  {
    name: 'Node js',
    icon: NodejsIcon.src,
    isDisabled: false,
    lang: 'node',
    comingSoon: false,
  },
  {
    name: 'React',
    icon: ReactIcon.src,
    isDisabled: true,
    lang: 'react',
    comingSoon: true,
  },
  {
    name: 'Typescript',
    icon: TypescriptIcon.src,
    isDisabled: true,
    lang: 'ts',
    comingSoon: true,
  },
  {
    name: 'Python',
    icon: PythonIcon.src,
    isDisabled: true,
    lang: 'py',
    comingSoon: true,
  },
];
