"use client";

import {
  Intro,
  Projects,
  Project,
  CarouselStyle,
  BgImage 
} from "@/style";
import { Container } from "@/style/global";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { ChartPieSlice , CaretDoubleRight} from "phosphor-react";
import { theme } from "../../stitches.config";
import bocaboca from '@/assets/icons/Logo BocaBoca.svg'

import Image from "next/image";


console.log('color: ',theme.colors.iconsStroke.value)
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
          <header>
            <h3>Projetos</h3>
            <span>
              <CaretDoubleRight size={32} color={theme.colors.white.value}/>
            </span>
          </header>
          
        </Container>
        <ScrollingCarousel className={CarouselStyle()}>
          <Project>
            <BgImage background={'bg3'}>
             <Image src={bocaboca} width={198} height={99} alt=""/> 
            </BgImage>
            <footer>
              <ChartPieSlice color={theme.colors.iconsStroke.value} weight="fill" size={32}/>
              <div>
                <p>Boca Boca</p>
                <span>DashBoard</span>
              </div>
            </footer>
          </Project>

          
          <Project>
            <BgImage>
             <Image src={bocaboca} width={198} height={99} alt=""/> 
            </BgImage>
            <footer>
              <ChartPieSlice color={theme.colors.iconsStroke.value} weight="fill" size={32}/>
              <div>
                <p>Boca Boca</p>
                <span>DashBoard</span>
              </div>
            </footer>
          </Project>

          
        </ScrollingCarousel>
      </Projects>
    </main>
  );
}
