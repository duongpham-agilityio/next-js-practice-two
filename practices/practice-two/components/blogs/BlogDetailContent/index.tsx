// Components
import { Container } from '@/components';
// Models
import { BlogBodyType } from '@/models';

export interface BlogDetailContentProps {
  body: BlogBodyType[];
}

export const BlogDetailContent = ({ body }: BlogDetailContentProps) => (
  <section className="bg-background-400 py-10">
    <Container className="text-text-primary flex flex-col gap-10 xl:w-[720px]">
      {body.map(({ id, content, subtitle }) => (
        <div key={id}>
          <h2 className="pb-5 text-lg xl:text-2xl">{subtitle}</h2>
          <p className="text-sm xl:text-lg">{content}</p>
        </div>
      ))}
    </Container>
  </section>
);
