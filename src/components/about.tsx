import * as React from 'react'

import { cn } from '../utils/tailwind'

type AboutProps = {
  initialState: boolean
  showAboutText: boolean
  showGallery: boolean
}

export const About = ({ initialState, showAboutText, showGallery }: AboutProps) => (
  <div className='fixed inset-0'>
    <div className='m-10 md:m-20 overflow-hidden'>
      <div
        className={cn(
          initialState && 'translate-x-[100%]',
          !initialState && showAboutText && 'animate-about-move-left',
          !initialState && showGallery && 'animate-about-move-right',
        )}
      >
        <p className='text-white font-semibold text-lg'>
          Todo empezó en el siglo XVII, cuando maestros constructores franceses e italianos tuvieron la idea de pintar una falsificación de mármol sobre los muros de los palacios y las iglesias, porque el uso de la piedra les resultaba muy difícil. Rápidamente esta técnica fue considerada como un arte, de tal forma que las pinturas de mármol de los grandes maestros llegaron a ser más prestigiosas que la misma materia.
          <br />
          Hoy día, esta técnica de pintura se ocupa en restauración de patrimonio, pero ya no surge de una búsqueda creativa. Es así como nace Diseño Franchute. Aprendí esta técnica "faux-marbre" en Francia en 2017, y llegué a Chile en 2019 con la intención de crear una marca en la cual podríamos jugar de nuevo con la falsificación del mármol a través de la creación de nuevas piezas.
          <br />
          De a poco se desarrolló la línea estética de Diseño Franchute, con una atracción para la curva imperfecta y abstracta, y el uso excesivo de colores y de pan de oro como si fuera la imitación de una piedra pirata imaginaria.
        </p>
      </div>
    </div>
  </div>
)
