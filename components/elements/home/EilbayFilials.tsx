import React from "react";
import Image from "next/image";
import amico from "@assets/amico.png";
import imageUrl from "@assets/imageUrl.png";

export default function EilbayFilials() {
  return (
    <div className="mt-3 mb-10">
      <div className="container">
        <h1>Пункты выдачи Eilbay</h1>

        <div className="flex justify-between">
          <Image
            src={amico}
            className="w-full"
            alt="some text"
            width={100}
            height={100}
          />

          <div className="flex">
            <ul>
              <li>KG - г. Ош</li>
              <li>UZ - г. Ташкент</li>
              <li>KZ - г. Алматы</li>
              <li>RU - г. Москва</li>
              <li>GR - г. Берлин</li>
            </ul>
            <ul>
              <li>Средняя Азия</li>
              <li>Средняя Азия</li>
              <li>Средняя Азия</li>
              <li>Европа</li>
              <li>Европа</li>
            </ul>
          </div>
          <Image
            src={amico}
            className="w-full"
            alt="some text"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
