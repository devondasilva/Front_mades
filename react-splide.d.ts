declare module '@splidejs/react-splide' {
    // Vous pouvez ajouter ici les déclarations de type que vous connaissez.
    // Si vous n'êtes pas sûr, vous pouvez laisser ceci vide pour l'instant.
    // Par exemple :
    // import { SplideProps, SplideSlideProps } from '@splidejs/splide';
    // export const Splide: React.FC<SplideProps>;
    // export const SplideSlide: React.FC<SplideSlideProps>;
    import { SplideProps } from '@splidejs/splide';
    const ReactSplide: React.FC<SplideProps>;
    export default ReactSplide;
  }
  
  declare module '@splidejs/splide' {
    import { Splide as SplideType } from '@splidejs/splide';
    const Splide: SplideType;
    export default Splide;
  }