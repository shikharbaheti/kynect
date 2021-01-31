import { Button } from "react-bootstrap";
const axios = require('axios');
const FileDownload = require('js-file-download');

function getResults() {
    axios({
        url: 'https://localhost:8080/jobSearch',
        method: 'GET',
        responseType: 'blob', // Important
    }).then((response) => {
        FileDownload(response.data, 'report.xls');
    });
}

function Jobs() {
    return (
        <div className="Jobs text-center">
            <div className="p-4 m-5">
                <h1 className="display-1">Jobs matching your interest/skills</h1>

                <Button size="lg" variant="outline-primary" onClick={getResults}>Get results!</Button>
            </div>
        </div>
    );
}
export default Jobs;