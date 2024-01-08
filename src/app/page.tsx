"use client";

import {
  Intro,
  Projects,
  Project,
  CarouselContainer,
  CarouselStyle,
} from "@/style";
import { Container } from "@/style/global";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

export default function Home() {
  return (
    <main>
      <Container>
        <Intro>
          <h2>Your name</h2>
          <p>
            Welcome to the extraordinary world of, a versatile and imaginative
            artist who skillfully navigates the realms of product design,
            photography and digital art. With a keen eye for detail and a
            relentless pursuit of innovation, crafts captivating visual
            narratives, immersive digital realms, and functional yet
            aesthetically pleasing products.
          </p>
        </Intro>
      </Container>
      <Projects>
        <Container>
          <h3>Projetos</h3>
        </Container>
        <ScrollingCarousel className={CarouselStyle()}>
          <Project>
            <div>
              <h1>1</h1>
            </div>
          </Project>
          <Project>
            <div>
              <h1>2</h1>
            </div>
          </Project>
          <Project>
            <div>
              <h1>3</h1>
            </div>
          </Project>
          <Project>
            <div>
              <h1>4</h1>
            </div>
          </Project>
        </ScrollingCarousel>
      </Projects>
    </main>
  );
}
