import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { getData } from "../config/FireBaseMethods";
import { useEffect, useState } from "react";

interface Question {
  message: string;
}

const SingleQuestion = () => {
  const params = useParams();
  const [question, setQuestion] = useState<Question | null>(null);

  const showQuestions = () => {
    getData("sawalYehHy", params.id)
     .then((res:any) => {
        setQuestion(res);
        console.log(res);
      })
     .catch((err: any) => {
        alert(err);
      });
  };

  useEffect(() => {
    showQuestions();
  }, []);

  return (
    <>
      <Box className="container rounded shadow" style={{ backgroundColor: "#D2649A" }}>
        <Box className="py-4">
          <Box>
            <textarea
              className="form-control"
              disabled
              name=""
              id=""
              value={question? question.message : ""}
            ></textarea>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleQuestion;