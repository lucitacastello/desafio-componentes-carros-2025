import "./styles.css";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardComments from "../../components/CardComments";

export default function Catalog() {
  return (
    <>
      <Header />

      <main className="ct-catalog-main">
        <section id="ct-catalog-section" className="ct-container">
          <div className="ct-catalog-cards-container">
            <h1>Venha nos visitar</h1>
            <Card />
            <Card />
          </div>

          <div className="ct-comment-cards-container">
            <h2>O que estão dizendo</h2>
            <CardComments />
            <CardComments />
            <CardComments />
            <CardComments />
            <CardComments />
            <CardComments />
          </div>

          <div>
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
