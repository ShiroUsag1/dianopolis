import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image
              className={styles.logo}
              src="/logosite.png"
              alt="logo turismo dianopolis"
              width={230}
              height={60}
              priority
            />
          </a>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Como Chegar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Atrativos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Catálogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Agências Receptivas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className={styles.fundomain}>
        <Image
          className={styles.montanha1}
          src="/montanha1.svg"
          alt="banner"
          width={500}
          height={200}
        />
        <div className="container">
          <div className="row">
            <div className={`${styles.centralizando} col`}>
              <h2 className={styles.titulo1}>Visite, explore</h2>
              <h2 className={styles.titulo1}>contemple toda</h2>
              <h2 className={styles.titulo1}>a natureza</h2>
            </div>
          </div>
        </div>
        <Image
          className={styles.montanha2}
          src="/montanha2.svg"
          alt="banner"
          width={500}
          height={200}
        />

        <Image
          className={styles.turista}
          src="/turista.png"
          alt="turista"
          width={400}
          height={500}
        />
      </section>
      <section className={styles.fundoagua}>
        <div className="container">
          <div className={`${styles.margintop} row`}>
            <div className="col d-flex justify-content-center align-items-center">
              <Image
                className={styles.deputado}
                src="/deputado.JPG"
                alt="turista"
                width={350}
                height={500}
              />
            </div>
            <div className="col">
              <h2 className={`${styles.sobre} text-center`}>Sobre o Município</h2>
              <p className={styles.sobre}>
                A história de Dianópolis, localizada no sudeste do estado do
                Tocantins, está profundamente ligada aos caminhos do interior do
                Brasil, à exploração do ouro, à religiosidade popular e à
                resistência de seus habitantes diante das transformações
                políticas, econômicas e sociais ao longo dos séculos. A
                religiosidade teve papel fundamental na consolidação do povoado.
                Esse sentimento religioso foi profundamente marcado por um dos
                episódios mais trágicos da história local: “Barulho do Duro” ou
                “Chacina do Duro”, em 1919, quando um
                conflito coronelístico levou ao massacre de nove cidadãos
                ligados ao poderoso clã dos Wolney, em uma região conhecida como
                Duro. Fato que abalou profundamente a população do então arraial
                de Dianas. O episódio gerou comoção, medo e indignação, mas
                também fortaleceu a fé popular como forma de enfrentamento da
                dor e da violência. Como resposta simbólica à tragédia, a
                comunidade ergueu a Capelinha dos Nove, em homenagem às nove
                vítimas da chacina. O local passou a ser visto como espaço de
                oração e respeito transformando o luto coletivo em devoção. Com
                o tempo, a Capelinha dos Nove consolidou-se como um dos mais
                importantes marcos históricos de Dianópolis, representando a
                resistência e a união do povo diante das adversidades. Com o
                declínio gradual da mineração, Dianópolis passou a se sustentar
                principalmente pela agricultura, pecuária e comércio local.
                Mesmo assim, manteve sua importância regional como ponto de
                ligação entre diferentes áreas do antigo norte goiano.
                Atualmente, Dianópolis a economia baseia-se principalmente na
                agropecuária, no comércio e nos serviços, além do crescente
                potencial turístico. Belezas naturais como cachoeiras, vales,
                serras e lagoas, aliadas ao patrimônio histórico e às
                manifestações culturais, atraem visitantes e fortalecem o
                turismo sustentável. Ao mesmo tempo em que preserva suas raízes
                históricas, Dianópolis busca se adaptar aos desafios do mundo
                contemporâneo, investindo em desenvolvimento urbano, educação e
                valorização cultural. A cidade segue construindo sua história
                com base na força de seu povo, na memória de seu passado e na
                esperança de um futuro próspero.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
         <Image
                className={styles.montanha1}
                src="/montanha3.svg"
                alt="banner"
                width={350}
                height={500}
              />

      </section>
    </div>
  );
}
