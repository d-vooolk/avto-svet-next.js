import './styles.css';
import {Montserrat_Alternates} from "next/font/google";

const lobster = Montserrat_Alternates({
    weight: ['600'],
    style: ['italic'],
    subsets: ['cyrillic'],
})

export default function Home() {
  return (
    <main>
        <section className={`main-section ${lobster.className}`}>
            <div className="main-text-wrapper">
                <h2 className='main-text'>
                    Путешествуй безопасно
                </h2>
                <h2 className='main-sub-text'>
                    Мастерская автосвета в Минске
                </h2>
            </div>
        </section>
    </main>
  );
}
