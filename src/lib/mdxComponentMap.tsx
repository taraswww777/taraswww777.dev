import MdxLayout from 'src/app/MdxLayout';
import {
  MdxTemplate,
  Question,
  Answer,
  BlockQuote,
  MetaHead,
} from 'src/components/mdx';
import { CopyAnchor } from 'src/components/CopyAnchor';
import { IconRuble } from 'src/components/icons';
import { PageTemplate } from 'src/components/PageTemplate';
import Image from 'next/image';
import { Card, ContentContainer, HL } from 'src/ui';

/**
 * Карта компонентов для MDXRemote (без Node/fs) — для гидрации страниц статей.
 */
export function getMdxComponents() {
  return {
    MdxLayout,
    MdxTemplate,
    MetaHead,
    PageTemplate,
    Question,
    Answer,
    BlockQuote,
    HL,
    Card,
    ContentContainer,
    CopyAnchor,
    IconRuble,
    Image,
  };
}
