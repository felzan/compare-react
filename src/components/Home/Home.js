import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {

    let heading = "Dolor numquam earum.";
    let subheading = "Accusantium et et asperiores beatae id error et occaecati. Vel excepturi id nesciunt numquam provident libero voluptate reprehenderit sint. Omnis quo at molestias consectetur fugiat fugit et voluptates. Velit consequatur quaerat neque doloremque ut delectus.";
    
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{ heading }</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{ subheading }</h2>
              </div>
              <a href="" className="button is-large is-primary" id="learn">Learn more</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="containet">
            <div className="columns pd is-desktop">
              <div className="columns is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
              </div>
              <div className="columns is-one-third-desktop">
                <p className="title"><strong>Maxime doloremque omnis.</strong></p>
              </div>
              <div className="columns is-one-third-desktop">
                <p>Veritatis nesciunt necessitatibus doloribus tempore. Magni sint dolores est voluptatem est quisquam dolor quaerat inventore. Saepe et impedit et a sit earum et consequatur ut. Sit placeat et assumenda similique aut doloribus. Nobis nihil autem quibusdam. Veniam impedit magni laudantium ad iste.</p>
              </div>
            </div>
          </div>

          <div className="columns pd">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Eaque laborum dolores.Eaque laborum dolores.Eaque laborum dolores.</p>
                  <p className="subtitle">Gary Simon</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">necessitatibus consequatur qui</p>
                  <p className="subtitle">Gary Simon</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">necessitatibus consequatur qui</p>
                  <p className="subtitle">Gary Simon</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        
      </div>
    )
  }
}

export default Home;