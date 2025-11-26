import "./styles.css"
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardComments from "../../components/CardComments";

export default function Catalog() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div>
            <h1>Venha nos visitar</h1>
          </div>

          <div>
            <Card />
            <Card />
          </div>

          <div>
            <h2>O que estão dizendo</h2>
            <CardComments />
            <CardComments />
          </div>
          <Footer />

        </section>
      </main>



    </>
  );
}
