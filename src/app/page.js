import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CardHover from "../components/CardHover";
import StaySection from "@/components/StaySection";

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
                  Contato Institucional
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
      <section className={styles.fundoagua} id="sobre">
        <div className={`${styles.fundoaguacel} container mt-5 mb-5`}>
          <div className="row">
            <div className="col text-center">
              <h2 className={`${styles.sobre} text-center fs-1`}>
                Sobre o Município
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 d-grid align-items-center justify-content-center">
              <Image
                className={styles.deputado}
                src="/CIDADE 1.jpg"
                alt="Foto da entrada da cidade"
                width={350}
                height={500}
              />
            </div>
            <div className="col-12 col-lg-6">
              <p className={styles.sobre}>
                <br />
                A história de Dianópolis, no sudeste do Tocantins, está ligada à exploração do ouro, à religiosidade popular e à resistência de seu povo. A fé teve papel central, especialmente após a “Chacina do Duro” (1919), quando um conflito coronelístico resultou na morte de nove membros do clã Wolney, causando grande comoção e fortalecendo a devoção popular como forma de enfrentar a dor.
                <br /><br />
                Em resposta, foi construída a Capelinha dos Nove, que transformou o luto coletivo em símbolo de fé, resistência e união, tornando-se um dos principais marcos históricos da cidade.
                <br /><br />
                Com o fim da mineração, Dianópolis passou a depender da agropecuária, comércio e serviços, mantendo relevância regional. Hoje, também se destaca pelo turismo, com belezas naturais e patrimônio cultural, enquanto preserva suas raízes e busca desenvolvimento e um futuro próspero.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Image
                className={styles.deputado}
                src="/CIDADE 3.jpg"
                alt="Foto da entrada da cidade"
                width={350}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
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
          <div className="row mb-5">
            <div className="col-12 col-lg-6">
              <div id="valeencantadocarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#valeencantadocarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#valeencantadocarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#valeencantadocarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#valeencantadocarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#valeencantadocarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item p-5 active">
                    <Image
                      className={styles.imagenscarousel}
                      src="/foto1.png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/foto3.png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/vale2.png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/vale3.png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/vale4.png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#valeencantadocarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#valeencantadocarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-grid align-items-between">
              <div>
                <h2 className={styles.titulocarousel}>Descubra os encantos do</h2>
                <h3 className={styles.titulocarousel2}>Vale Encantado</h3>
                <p className={styles.descricaocarousel}>
                  Localizado a cerca de 20 km do centro urbano de Dianópolis, o Vale Encantado de Dianópolis é um dos destinos mais impressionantes da região e o verdadeiro cartão-postal da cidade. Com acesso facilitado por boas estradas, o visitante já inicia a experiência com conforto até chegar a um cenário que surpreende em cada detalhe.
                  <br />
                  O encontro entre o verde intenso e as rochas esculpidas pela natureza cria um visual único, que se torna ainda mais especial ao chegar ao Portal do Vale — um espetáculo natural com grande concentração de estalactites e estalagmites, perfeito para contemplação e registros inesquecíveis.
                  <br />
                  Ao explorar a trilha, o visitante acompanha um riacho que corta o fundo do vale, proporcionando uma encantadora trilha aquática que leva até a Cachoeira da Ré.
                  <br /> <br />
                  Descubra a trilha do Vale Encantado e permita-se viver uma experiência única em meio à natureza!
                </p>
              </div>
              <div className="text-center d-grid align-items-end">
                <a className={styles.btnatrativo} href="https://maps.app.goo.gl/nnhNr33nfCzqQ4XVA"
                  target="_blank">
                  Saiba Como Chegar
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-12 col-lg-6 d-grid align-items-between">
              <div>
                <h2 className={styles.titulocarousel}>Descubra os encantos da</h2>
                <h3 className={styles.titulocarousel2}>Fortaleza dos Guardiões</h3>
                <p className={styles.descricaocarousel}>
                  Localizada no município de Dianópolis, a Fortaleza dos Guardiões é um dos destinos mais impressionantes da região, encantando visitantes com suas formações rochosas que lembram muralhas naturais de uma antiga fortaleza. O acesso leva o turista a um verdadeiro cenário esculpido pelo tempo, onde a natureza revela sua grandiosidade em cada detalhe.
                  <br />
                  Ao chegar, o visitante se depara com imensos paredões de pedra que se erguem como verdadeiros guardiões da paisagem, criando um ambiente de contemplação, aventura e até certo mistério. A vegetação típica do cerrado completa o visual, contrastando com as rochas e proporcionando uma experiência única para quem aprecia ecoturismo, trilhas e fotografia. Percorrer a Fortaleza dos Guardiões é como explorar um monumento natural a céu aberto.
                  <br /><br />
                  Venha conhecer a Fortaleza dos Guardiões e descubra um dos cenários mais fascinantes de Dianópolis!
                </p>
              </div>
              <div className="text-center d-grid align-items-end">
                <a className={styles.btnatrativo} href="https://maps.app.goo.gl/KLbhvtkkmSzSAy8TA"
                  target="_blank">
                  Saiba Como Chegar
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div id="fortalezaguardioescarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#fortalezaguardioescarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#fortalezaguardioescarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#fortalezaguardioescarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#fortalezaguardioescarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#fortalezaguardioescarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item p-5 active">
                    <Image
                      className={styles.imagenscarousel}
                      src="/fortaleza (4).png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/fortaleza (2).png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/fortaleza.png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/fortaleza (3).png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/fortaleza (1).png"
                      alt="Vale Encantado - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#fortalezaguardioescarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#fortalezaguardioescarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-12 col-lg-6">
              <div id="cachoeirascarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#cachoeirascarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#cachoeirascarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#cachoeirascarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#cachoeirascarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item p-5 active">
                    <Image
                      className={styles.imagenscarousel}
                      src="/cachoeira (4).png"
                      alt="Cachoeira - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/cachoeira (1).png"
                      alt="Cachoeira - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/cachoeira (3).png"
                      alt="Cachoeira - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                  <div className="carousel-item p-5">
                    <Image
                      className={styles.imagenscarousel}
                      src="/cachoeira (2).png"
                      alt="Cachoeira - Dianópolis"
                      width={344}
                      height={258}
                    />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#cachoeirascarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#cachoeirascarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-grid align-items-between">
              <div>
                <h2 className={styles.titulocarousel}>Descubra o encanto das</h2>
                <h3 className={styles.titulocarousel2}>Cachoeiras de Dianópolis</h3>
                <p className={styles.descricaocarousel}>
                  As cachoeiras de Dianópolis são verdadeiros tesouros naturais que encantam visitantes em busca de beleza, tranquilidade e aventura. Espalhadas pela região, essas quedas d’água se destacam pelas formações rochosas únicas e pela integração perfeita com a vegetação típica do cerrado.
                  <br />
                  Entre os destaques, está a famosa Cachoeira da Ré, conhecida por seu fenômeno raro em que a água passa por trás da queda, criando uma experiência inesquecível para quem a visita. Além dela, diversas outras cachoeiras e poços naturais oferecem espaços ideais para banho, descanso e conexão com a natureza.
                  <br />
                  Explorar as cachoeiras de Dianópolis é também percorrer trilhas cercadas por paisagens deslumbrantes, observar a biodiversidade local e vivenciar momentos únicos em meio a um ambiente preservado.
                  <br /><br />
                  Venha se refrescar nas cachoeiras de Dianópolis e viva experiências inesquecíveis em meio à natureza!
                </p>
              </div>
              <div className="text-center d-grid align-items-end">
                <a className={styles.btnatrativo} href="https://maps.app.goo.gl/7KNqdWACXuA9JVcB6"
                  target="_blank">
                  Saiba Como Chegar
                </a>
              </div>
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
              <a href="https://meusitenanet.com.br/download/folderdianopolis.pdf" target="_blank">
                <Image
                  className={styles.folhetosturisticos}
                  src="/folheto.jpg"
                  alt="Folheto Turístico"
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
      <section className={styles.hoteis}>
        <StaySection
          bannerTitle="ONDE FICAR EM DIANÓPOLIS"
          bannerSubtitle="Município de Dianópolis de Serras Gerais"
          bannerImage="bannerhoteis.jpg"
          cards={[
            {
              id: "1",
              title: "Pousada Exemplo",
              description: "Área, ar e café da manhã incluso.",
              image: "pousadaexemplo1.jpg",
              rating: 4.5,
            },
            {
              id: "2",
              title: "Pousada Exemplo",
              description: "Ótima localização e conforto.",
              image: "pousadaexemplo2.jpg",
              rating: 4.5,
            },
            {
              id: "3",
              title: "Pousada Exemplo",
              description: "Espaço amplo e estacionamento.",
              image: "pousadaexemplo3.jpg",
              rating: 4.5,
            },
          ]}
          cta={{
            title: "Seu estabelecimento aqui?",
            description: "Faça parte do guia oficial.",
            buttonText: "Cadastrar",
            link: "https://forms.gle/YjZhSd96eHy38R878",
          }}
        />
      </section>
      <section className={styles.comochegar} id="chegar">
        <div className="container pb-5">
          <div className="row pb-4">
            <div className="col-12 col-lg-6">
              <h2 className={styles.titulochegar}>Como Chegar</h2>
              <a
                className={styles.linkchegar}
                href="https://maps.app.goo.gl/cohdWmZdAwVwLeds5"
                target="_blank"
              >
                <div>
                  <CardHover
                    imgDefault="/mapasatelite.png"
                    imgHover="/mapa.png"
                  />
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
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
        <h3 className={styles.tituloagencia2}>de Turismo e Cultura</h3>
      </div>

      <section className={styles.fundoareia} id="agencia">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className={styles.tituloagencia3}>Secretaria Municipal</h2>
              <h3 className={styles.tituloagencia3}>
                de Turismo e Cultura
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
                <i className="bi bi-envelope-fill"></i>
                <p><strong>Email</strong>
                  <br /> turismodno@gmail.com</p>
              </div>
              <div className={styles.contato}>
                <i className="bi bi-clock-fill"></i>
                <p><strong>Horário de Funcionamento</strong>
                  <br />De segunda à sexta-feira, das 7h às 13h</p>
              </div>
              <div className={styles.contato}>
                <i className="bi bi-geo-alt-fill"></i>
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
          <div className="row">
            <div className="col text-center pt-5 pb-5">
              <p>Gostaria de contribuir para a melhoria dos serviços públicos? Acesse a Ouvidoria Online e registre sua manifestação de forma rápida e segura. Aqui você pode enviar sugestões, solicitações, elogios, reclamações ou denúncias. Sua participação é fundamental para construirmos uma gestão mais eficiente e próxima da população.</p>
              <br />
              <a className={styles.btncontato} href="https://www.dianopolis.to.gov.br/ouvidoria" target="_blank">
                <i class="bi bi-megaphone-fill"></i> Ouvidoria Online
              </a>
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
      <section className="bg-ligt pt-5 pb-5 d-grid align-items-center justify-content-center">
        <div className="container m-0">
          <div className="row">
            <div className="col">
              <h3>Realização:</h3>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <Image
                className={styles.logo}
                src="/logosebrae.png"
                alt="Logo"
                width={219}
                height={120}
              />
              <Image
                className={styles.logo}
                src="/cidadeempreendedora.png"
                alt="Logo"
                width={300}
                height={95}
              />
              <Image
                className={styles.brasao}
                src="/brasão.png"
                alt="Logo"
                width={145}
                height={120}
              />
              <Image
                className={styles.logo}
                src="/logocidade.png"
                alt="Logo"
                width={300}
                height={88}
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
