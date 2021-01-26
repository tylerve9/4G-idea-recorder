import React, { Component } from 'react'

export default class Registrosideas extends Component
 {
     onSumit = (e) => {

     }
    render() {
        return (
            <div class="text-center p-4 m-2"><button className="px-4 py-2 mx-2 bg-blue-500 rounded-lg shadow-md border border-blue-700 text-white text-semibold outline-none">
            <h4>Registros de ideas</h4>  

            <form onSumit={this.onSumit}>
                <button>
               </button>
            </form>
            </button>

            </div>
    )
    }
            }
