import React from 'react';
import axios from 'axios';

class Indonesia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            positif: 0,
            meninggal: 0,
            sembuh: 0,
            pl: false,
            ml: false,
            sl: false,
            loading: false
        }
    }
    componentDidMount(){
        axios.get("https://api.kawalcorona.com/indonesia/").then(res => {
            this.setState({
                pl: true,
                ml: true,
                sl: true,
                positif: res.data[0].positif,
                meninggal: res.data[0].meninggal,
                sembuh: res.data[0].sembuh
            })
        })
        axios.get("https://api.kawalcorona.com/indonesia/provinsi/").then(res => {
            this.setState({
                loading: true,
                data: res.data
            })
        })
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="text-center">
                        <h2>INDONESIA</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card bg-danger img-card box-primary-shadow">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="text-white">
                                            <p className="text-white mb-0">
                                                total positif
                                            </p>
                                            <h2 className="number-font mb-0">
                                                {this.state.pl ? this.state.positif :  "LOADING..."}
                                            </h2>
                                            <p className="text-white mb-0">
                                                orang
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card bg-secondary img-card box-success-shadow">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="text-white">
                                            <p className="text-white mb-0">
                                                total meninggal
                                            </p>
                                            <h2 className="number-font mb-0">
                                                {this.state.ml ? this.state.meninggal :  "LOADING..."}
                                            </h2>
                                            <p className="text-white mb-0">
                                                orang
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card bg-success img-card box-secondary-shadow">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="text-white">
                                            <p className="text-white mb-0">
                                                total sembuh
                                            </p>
                                            <h2 className="number-font mb-0">
                                                {this.state.sl ? this.state.sembuh :  "LOADING..."}
                                            </h2>
                                            <p className="text-white mb-0">
                                                orang
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cards">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-14">
                            <div class="card">
                                <div class="card-header ">
                                    <h3 class="card-title">
                                        Kasus Coronavirus Provinsi Di Indonesia
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive service">
                                        <table class="table table-bordered table-hover mb-0 text-nowrap css-serial">
                                            <thead>
                                                <tr>
                                                    <th
                                                        style={{
                                                            position: "stiky",
                                                            top: "0"
                                                        }}
                                                    >
                                                        NO.
                                                    </th>
                                                    <th
                                                        style={{
                                                            position: "stiky",
                                                            top: "0"
                                                        }}
                                                    >
                                                        Provinsi
                                                    </th>
                                                    <th
                                                        style={{
                                                            position: "stiky",
                                                            top: "0"
                                                        }}
                                                    >
                                                        Positif
                                                    </th>
                                                    <th
                                                        style={{
                                                            position: "stiky",
                                                            top: "0"
                                                        }}
                                                    >
                                                        Sembuh
                                                    </th>
                                                    <th
                                                        style={{
                                                            position: "stiky",
                                                            top: "0"
                                                        }}
                                                    >
                                                        Meninggal
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.loading ? (
                                                    this.state.data.map(
                                                        (p, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        {i + 1}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            p
                                                                                .attributes
                                                                                .Provinsi
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            p
                                                                                .attributes
                                                                                .Kasus_Posi
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            p
                                                                                .attributes
                                                                                .Kasus_Semb
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            p
                                                                                .attributes
                                                                                .Kasus_Meni
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td>0</td>
                                                        <td>LOADING ...</td>
                                                        <td>LOADING ...</td>
                                                        <td>LOADING ...</td>
                                                        <td>LOADING ...</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Indonesia;
