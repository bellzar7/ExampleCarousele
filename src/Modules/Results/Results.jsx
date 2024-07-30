import React from 'react'
import style from './Results.module.css'
import classNames from 'classnames'
import {Carousel} from "../../Components";
import {
    results_baby,
    results_demimotors,
    results_ferment,
    results_krasnebruk,
    results_leus,
    results_shouse
} from "../../Assets/Images/Results";



const Results = () => {

  const items = [
    { src: results_leus, alt: 'Leus' },
    { src: results_krasnebruk, alt: 'Krasnebruk' },
    { src: results_demimotors, alt: 'Demimotors' },
    { src: results_ferment, alt: 'Ferment' },
    { src: results_shouse, alt: 'Shouse' },
    { src: results_baby, alt: 'Baby' },
  ]

  return (
      <div className={classNames('customContainer', style.wrap)}>
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
           Приклад 1 (Сайт Znaesh Agency)
          </h2>
        </div>
        <div className={style.wrap_bottom}>
          <Carousel data={items}/>
        </div>
      </div>
  )
}

export {Results}
