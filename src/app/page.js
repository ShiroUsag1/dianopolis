import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image
              src="/logosite.png"
              alt="logo turismo dianopolis"
              width={188}
              height={60}
              priority
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#chegar">
                  Como Chegar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#atrativos">
                  Atrativos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#folheto">
                  Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#agencia">
                  Agências Receptivas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className={styles.fundomain} id="main">
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
              <h2 className={styles.titulo1}>e contemple toda</h2>
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
      <section className={styles.fundoagua} id="sobre"></section>
      <div className={`${styles.fundoaguacel} container mt-5 mb-5`}>
        <div className="row">
          <div className="col text-center">
            <Image
              className={styles.deputado}
              src="/deputado.JPG"
              alt="Foto da estátua do Deputado Abilío Wolney na praça do Coreto"
              width={350}
              height={500}
            />
          </div>
          <div className="col">
            <h2 className={`${styles.sobre} text-center fs-1`}>
              Sobre o Município
            </h2>
            <p className={styles.sobre}>
              A história de Dianópolis, localizada no sudeste do estado do
              Tocantins, está profundamente ligada aos caminhos do interior do
              Brasil, à exploração do ouro, à religiosidade popular e à
              resistência de seus habitantes diante das transformações
              políticas, econômicas e sociais ao longo dos séculos.
              <br />
              <br />
              A religiosidade teve papel fundamental na consolidação do povoado.
              Esse sentimento religioso foi profundamente marcado por um dos
              episódios mais trágicos da história local: “Barulho do Duro” ou
              “Chacina do Duro”, em 1919, quando um conflito coronelístico levou
              ao massacre de nove cidadãos ligados ao poderoso clã dos Wolney,
              em uma região conhecida como Duro. Fato que abalou profundamente a
              população do então arraial de Dianas. O episódio gerou comoção,
              medo e indignação, mas também fortaleceu a fé popular como forma
              de enfrentamento da dor e da violência.
              <br />
              Como resposta simbólica à tragédia, a comunidade ergueu a
              Capelinha dos Nove, em homenagem às nove vítimas da chacina. O
              local passou a ser visto como espaço de oração e respeito
              transformando o luto coletivo em devoção. Com o tempo, a Capelinha
              dos Nove consolidou-se como um dos mais importantes marcos
              históricos de Dianópolis, representando a resistência e a união do
              povo diante das adversidades.
              <br />
              <br />
              Com o declínio gradual da mineração, Dianópolis passou a se
              sustentar principalmente pela agricultura, pecuária e comércio
              local. Mesmo assim, manteve sua importância regional como ponto de
              ligação entre diferentes áreas do antigo norte goiano.
              <br />
              <br />
              Atualmente, Dianópolis a economia baseia-se principalmente na
              agropecuária, no comércio e nos serviços, além do crescente
              potencial turístico. Belezas naturais como cachoeiras, vales,
              serras e lagoas, aliadas ao patrimônio histórico e às
              manifestações culturais, atraem visitantes e fortalecem o turismo
              sustentável. Ao mesmo tempo em que preserva suas raízes
              históricas, Dianópolis busca se adaptar aos desafios do mundo
              contemporâneo, investindo em desenvolvimento urbano, educação e
              valorização cultural. A cidade segue construindo sua história com
              base na força de seu povo, na memória de seu passado e na
              esperança de um futuro próspero.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.atrativos} id="atrativos">
        <Image
          className={styles.montanha3}
          src="/montanha3.svg"
          alt="banner"
          width={500}
          height={200}
        />
        <h2 className={styles.tituloatrativos}>Atrativos</h2>
        <h3 className={styles.tituloatrativos2}>O que fazer em Dianópolis?</h3>
        <div className="container">
          <div className={`${styles.paddingtop} row`}>
            <div className="col">
              <a
                href="https://maps.app.goo.gl/qJHe7LTPF6vpr2Ck7"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/pracacoreto.jpg"
                  alt="Praça do Coreto - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>PRAÇA CEL. WOLNEY</p>
              </a>
            </div>
            <div className="col">
              <a
                href="https://maps.app.goo.gl/nnhNr33nfCzqQ4XVA"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/valeencantado.jpg"
                  alt="Vale Encantado - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>VALE ENCANTADO</p>
              </a>
            </div>
            <div className="col">
              <a
                href="https://maps.app.goo.gl/sqkwWpV9GSJYD7358"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/fortalezaguardioes.jpg"
                  alt="Fortaleza dos Guardiões - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>FORTALEZA DOS GUARDIÕES</p>
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <a
                href="https://maps.app.goo.gl/Qw8kUzbB7SsivfWK9"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/museu.jpg"
                  alt="Museu Municipal - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>MUSEU MUNICIPAL</p>
              </a>
            </div>
            <div className="col">
              <a
                href="https://maps.app.goo.gl/bLCfEmW5vYXAxmWE7"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/cachoeiradare.jpg"
                  alt="Cachoeira da Ré - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>CACHOEIRA DA RÉ</p>
              </a>
            </div>
            <div className="col">
              <a
                href="https://maps.app.goo.gl/w5isBHT57zwRiNYj6"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/cachoeiraorquideas.jpg"
                  alt="Cachoeira das Orquídeas - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>CACHOEIRA DAS ORQUÍDEAS</p>
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <a
                href="https://maps.app.goo.gl/PFRtAX2kLDekidQD8"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/capelinha.jpg"
                  alt="Capelinha dos Nove - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>CAPELINHA DOS NOVE</p>
              </a>
            </div>
            <div className="col">
              <a
                href="https://maps.app.goo.gl/skdv62yFWCSkeqZJ7"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/casadourada.jpg"
                  alt="Casa Dourada - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>CASA DOURADA</p>
              </a>
            </div>
            <div className="col">
              <a
                href="https://maps.app.goo.gl/wboP2AFspQBXehS66"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/lagoabonita.jpg"
                  alt="Lagoa Bonita - Dianópolis"
                  width={344}
                  height={258}
                />
                <p className={styles.fontatrativos}>LAGOA BONITA</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Image
        className={styles.folhas1}
        src="/folhas1.png"
        alt="banner"
        width={344}
        height={258}
      />
      <Image
        className={styles.folhas2}
        src="/folhas2.png"
        alt="banner"
        width={344}
        height={258}
      />
      <section className={styles.folhetos} id="folheto">
        <div className="container p-5">
          <div className="row mt-5 mb-5">
            <div className={`${styles.centfolheto} col`}>
              <p className={styles.descricaofolheto}>
                Baixar catálogo de experiências da região turística de
                Dianópolis
              </p>
              <a href="#">
                <Image
                  className={styles.folhetosturisticos}
                  src="/folheto.jpg"
                  alt="Folheto Turístico"
                  width={500}
                  height={375}
                />
              </a>
            </div>
            <div className={`${styles.centfolheto} col`}>
              <p className={styles.descricaofolheto}>
                Baixar o mapa ilustrativo da região turística da cidade de
                Dinanópolis
              </p>
              <a href="#">
                <Image
                  className={styles.folhetosturisticos}
                  src="/mapa.jpg"
                  alt="Mapa Turístico"
                  width={500}
                  height={375}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Image
        className={styles.folhas1}
        src="/folhas1.png"
        alt="banner"
        width={344}
        height={258}
      />
      <Image
        className={styles.folhas2}
        src="/folhas2.png"
        alt="banner"
        width={344}
        height={258}
      />
      <section className={styles.comochegar} id="chegar">
        <div className="container pt-5 pb-5">
          <div className="row pt-5 pb-4">
            <div className="col">
              <h2 className={styles.titulochegar}>Como Chegar</h2>
              <a
                className={styles.linkchegar}
                href="https://maps.app.goo.gl/cohdWmZdAwVwLeds5"
                target="_blank"
              >
                <Image
                  className={styles.imagensturisticas}
                  src="/mapasatelite.jpg"
                  alt="Mapa de Dianópolis por satélite"
                  width={450}
                  height={450}
                />
              </a>
            </div>
            <div className="col pt-4">
              <p className={styles.direcoes}>
                Dianópolis é acessível por diversas rotas, facilitando a chegada
                de visitantes de diferentes localidades.
                <br />
                <br />
                <strong>De Palmas (TO): </strong>
                Partindo da capital do Tocantins, percorre-se cerca de 339 km até
                Dianópolis, com o trajeto rodoviário principal seguindo pela
                BR-153 e TO-050/TO-040. Essa viagem leva cerca de 4 h 30 min a 5 h
                de carro, com estradas em boas condições na maior parte do
                percurso
                <br />
                <br />
                <strong>De Araguaína (TO): </strong>
                Araguaína é um ponto estratégico para quem vem do norte do
                Tocantins. A distância até Dianópolis é de aproximadamente 719 km (via TO-222/TO-050 em parte do trajeto, dependendo da
                rota escolhida), com estradas bem sinalizadas e percurso
                tranquilo, levando cerca de 9 h a 10 h de viagem.
                <br />
                <br />
                <strong>De Gurupi (TO): </strong>
                Gurupi, um dos maiores centros urbanos do sul do Tocantins, fica a
                aproximadamente 326 km de Dianópolis. O trajeto segue
                principalmente pela BR-153 e rodovias estaduais, oferecendo boas
                condições de tráfego e um tempo médio de deslocamento de 4h a
                5h.
                <br />
                <br />
                <strong>De Brasília (DF): </strong>
                Para quem vem da capital federal, Dianópolis está a cerca de 636
                km de distância. O percurso segue pela BR-020 em direção ao
                nordeste goiano, conectando-se posteriormente às rodovias
                estaduais do Tocantins. A viagem costuma durar entre 8h e 9h,
                atravessando paisagens do Cerrado brasileiro.
              </p>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col text-center">
              <a
                className={styles.linkchegar}
                href="https://maps.app.goo.gl/cohdWmZdAwVwLeds5"
                target="_blank"
              >
                <Image
                  src="/mapicon.png"
                  alt="Icon Google maps"
                  width={130}
                  height={130}
                />
                Clique aqui para abrir a localização
              </a>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
      <div
        className={styles.areia}
      >
        <h2 className={styles.tituloagencia}>Secretaria Municipal</h2>
        <h3 className={styles.tituloagencia2}>Entre em contato para saber mais sobre a região.</h3>
      </div>

      <section className={styles.fundoareia} id="agencia">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className={styles.tituloagencia3}>Secretaria Municipal</h2>
              <h3 className={styles.tituloagencia3}>
                Entre em contato para saber mais sobre a região.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.contato}>
                <i className="bi bi-telephone-fill"></i>
                <p><strong>Telefone</strong>
                  <br />(63) 3692-2416</p>
              </div>
              <div className={styles.contato}>
                <i class="bi bi-envelope-fill"></i>
                <p><strong>Email</strong>
                  <br /> turismodno@gmail.com</p>
              </div>
              <div className={styles.contato}>
                <i class="bi bi-clock-fill"></i>
                <p><strong>Horário de Funcionamento</strong>
                  <br />De segunda à sexta-feira, das 7h às 13h</p>
              </div>
              <div className={styles.contato}>
                <i class="bi bi-geo-alt-fill"></i>
                <p><strong>Endereço</strong>
                  <br />Rua 2, n° 2, Diana Pontes - Centro - 77300-000</p>

              </div>
            </div>
            <div className="col">
              <Image
                className={styles.logocidade}
                src="/logoturismo.png"
                alt="banner"
                width={500}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
      <Image
        className={styles.areia2}
        src="/areia.svg"
        alt="banner"
        width={500}
        height={200}
      />
      <section className={styles.guardioes}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className={styles.guardioestitulo}>
                Em Dianópolis, somos guardiões de tradições centenárias e
                paisagens deslumbrantes, convidando você a se reconectar com a
                essência da vida.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ligt pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Realização:</h3>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <Image
                className={styles.logo}
                src="/logocidade.png"
                alt="Logo"
                width={300}
                height={88}
              />
              <Image
                className={styles.logo}
                src="/logosebrae.png"
                alt="Logo"
                width={219}
                height={120}
              />
              <Image
                className={styles.logo}
                src="/logosetuc.png"
                alt="Logo"
                width={250}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p className="m-0">
          2025 © Prefeitura de Dianópolis, Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
