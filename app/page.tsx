import { Container, Hero } from '@components';
import { getAllHeros } from './actions';
export default async function Home() {
  const heros: Hero[] = await getAllHeros();

  return (
    <main>
      <Hero banners={heros} />
      <article>
        <Container>
          <div>Home</div>
        </Container>
      </article>
    </main>
  );
}
