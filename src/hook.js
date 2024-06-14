import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);

    const toggle = () => {
        setIsFacingUp(up => !up);
    }

    return [isFacingUp, toggle];
}

const useAxios = (formatter) => {
    const [results, setResults] = useState([]);
    const getResponse = async (BASEURL, endpoint='') => {
        const response = await axios.get(
        BASEURL + endpoint
        );
        const data = formatter(response.data);
        
        setResults(results => [...results, { ...data, id: uuid() }]);
    };
    const resetResults = () => {
        setResults([]);
    }
    
    return [results, getResponse, resetResults];
}

export { useFlip, useAxios };