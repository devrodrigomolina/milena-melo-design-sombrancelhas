import divider from "../../assets/divider.png";
import icon_01 from "../../assets/icon_01.png";
import icon_02 from "../../assets/icon_02.png";
import icon_03 from "../../assets/icon_03.png";
import Buttons from "../Buttons/Buttons";
import Titles from "../Titles/Titles";
import * as C from "./style";

const About = () => {
  return (
    <C.ContainerAbout>
      <C.InfosAbout>
        <div className="title">
          <Titles
            title="Bem vindo ao estudio Milena Melo"
            subtitle="QUALIDADE ACIMA DE QUANTIDADE"
          />
          <img src={divider} />
        </div>
        <div className="about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            voluptatem distinctio, expedita fugit ad autem sapiente sit cum
            tenetur nesciunt odio. Neque ut maxime quo. Saepe atque praesentium
            adipisci dignissimos? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae nam nihil laborum dicta impedit saepe
            consequatur accusamus, voluptate, ex facere minus voluptas facilis
            odio illum dignissimos incidunt sit cumque quos. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Fuga ipsam quos eaque
            recusandae molestias, natus atque voluptate aut exercitationem
            facere cum ea asperiores minus distinctio! Corporis placeat
            explicabo dolorum aperiam!
          </p>
          <Buttons />
          <div className="image"></div>
          <div className="container-cards">
            <div className="cards">
              <div className="card">
                <div className="img">
                  <img src={icon_01} alt="" />
                </div>
                <div className="infos">
                  <h1 className="title-card">Design de sombrancelhas</h1>
                  <p className="text-card">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa vitae maiores ratione nesciunt libero ipsam.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={icon_02} alt="" />
                </div>
                <div className="infos">
                  <h1 className="title-card">Maquiagem</h1>
                  <p className="text-card">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa vitae maiores ratione nesciunt libero ipsam.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={icon_03} alt="" />
                </div>
                <div className="infos">
                  <h1 className="title-card">Sei la q isso</h1>
                  <p className="text-card">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa vitae maiores ratione nesciunt libero ipsam.
                  </p>
                </div>
              </div>
            </div>
              <div className="btn">
                  <Buttons />
              </div>
          </div>
        </div>
      </C.InfosAbout>
    </C.ContainerAbout>
  );
};

export default About;
