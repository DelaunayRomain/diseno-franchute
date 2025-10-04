import * as React from 'react'

import { cn } from '../utils/tailwind'

export const About = () => (
  <div
    className={cn(
      'ml-7 mr-15',
      'sm:ml-20 sm:mr-25',
      'md:ml-30 md:mr-35',
      'lg:mx-auto lg:w-2/3 lg:max-w-[1000px]',
    )}
  >
    <div
      className={cn(
        'min-h-screen py-6 flex flex-col items-center justify-center gap-3 sm:gap-6',
        'text-white text-justify font-semibold sm:text-lg md:text-xl',
      )}
    >
      <p>
        Todo empezó en el siglo XVII, cuando maestros constructores franceses e italianos tuvieron la idea de pintar una falsificación de mármol sobre los muros de los palacios y las iglesias, porque el uso de la piedra les resultaba muy difícil. Rápidamente esta técnica fue considerada como un arte, de tal forma que las pinturas de mármol de los grandes maestros llegaron a ser más prestigiosas que la misma materia.
      </p>
      <p>
        Hoy día, esta técnica de pintura se ocupa en restauración de patrimonio, pero ya no surge de una búsqueda creativa. Es así como nace Diseño Franchute. Aprendí esta técnica "faux-marbre" en Francia en 2017, y llegué a Chile en 2019 con la intención de crear una marca en la cual podríamos jugar de nuevo con la falsificación del mármol a través de la creación de nuevas piezas.
      </p>
      <p>
        De a poco se desarrolló la línea estética de Diseño Franchute, con una atracción para la curva imperfecta y abstracta, y el uso excesivo de colores y de pan de oro como si fuera la imitación de una piedra pirata imaginaria.
      </p>
    </div>
  </div>
)
