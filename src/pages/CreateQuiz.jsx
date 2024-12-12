import {useState} from "react";
import {useFieldArray, useForm} from "react-hook-form";
import {quizzes} from "../data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const CreateQuiz = () => {
  const {
    register,
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      id: "",
      title: "",
      definitions: [
        {
          keyword: "",
          definition: "",
        },
      ],
      questions: [
        {
          mainQuestion: "",
          correctAnswer: "a", // letter
          choices: {
            a: "",
            b: "",
            c: "",
            d: "",
          },
        },
      ],
      wallpaperId: "classic",
      isMinutes: "notMinutes",
      timerMinutes: "",
      timerSeconds: "",
      isSound: "off",
      isShowAnswers: false,
      course: "Programación Fullstack", //'Programaciòn Fullstack
      module: "Módulo 1", // Modulo 1
      schedule: "viernes-intensivo", //'viernes intensivo matutino',
      instructor: "Mariana Guanda", //'Mariana Guanda',
      image: "/assets/ciencia.png",
      gradient: "from-purple-500 to-pink-500",
      template: "questionary", //TODO
    },
  });

  const [template, setTemplate] = useState("questionary");

  const {fields, append, remove} = useFieldArray({control, name: "questions"});

  const onSubmit = data => {
    data.id = quizzes.length + 1;

    console.log("form data:", data);

    // validations
    if (data.questions.length < 3 || data.definitions.length < 3) {
      alert("Debe completar el formlario");
    }
    if (data.questions.length < 3 && data.template == "questionay") {
      alert("Debe ingresar mínimo 3 preguntas");
    }
    if (data.definitions.length < 3 && data.template == "openTheBox") {
      alert("Debe ingresar mínimo 3 definiciones");
    } else {
      quizzes.push(data);
      console.log(quizzes);
    }
  };

  const minQuestions = 3;
  const minDefinitions = 3;

  return (
    <div>
      <h2>Nuevo examen</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title  */}
        <div>
          <label htmlFor="title">Titulo del examen</label>
          <input
            type="text"
            {...register("title", {required: true})}
            className="border border-gray-300 rounded-md"
          />
          {errors.title?.type === "required" && (
            <p>El título del examen es requerido </p>
          )}
        </div>
        <br />
        {/* Template  */}
        <div className="flex gap-4">
          <label htmlFor="title">Selecciona una plantilla</label>
          <br />
          <label>
            <input
              onClick={() => setTemplate("questionary")}
              type="radio"
              {...register("template")}
              value="questionary"
            />
            Cuestionario
          </label>
          <label>
            <input
              onClick={() => setTemplate("openTheBox")}
              type="radio"
              {...register("template")}
              value="openTheBox"
            />
            Abre la caja
          </label>
        </div>
        <br />
        {/* Questionary - Questions */}
        {template === "questionary" ? (
          <>
            <div>
              <h2>Preguntas (mínimo {minQuestions})</h2>
              {fields.map((item, index) => {
                return (
                  <div key={index}>
                    {/* Question  */}
                    <div>
                      <br />
                      <label htmlFor="question">Pregunta {index + 1}</label>
                      <input
                        type="text"
                        {...register(`questions[${index}].mainQuestion`)}
                        className="border border-gray-300 rounded-md"
                      />
                    </div>
                    <br />
                    {/* Choices  */}
                    <div>
                      <h2>Opciones</h2>
                      <div>
                        <label htmlFor="question">Opcion A</label>
                        <input
                          type="text"
                          {...register(`questions[${index}].choices.a`)}
                          className="border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="question">Opcion B</label>
                        <input
                          type="text"
                          {...register(`questions[${index}].choices.b`)}
                          className="border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="question">Opcion C</label>
                        <input
                          type="text"
                          {...register(`questions[${index}].choices.c`)}
                          className="border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="question">Opcion D</label>
                        <input
                          type="text"
                          {...register(`questions[${index}].choices.d`)}
                          className="border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <br />
                    {/* Correct Answer  */}
                    <div>
                      <label>Respuesta correcta</label>{" "}
                      {/* Add label for accessibility */}
                      <select className="border border-gray-300 rounded-md">
                        <option
                          {...register(`questions[${index}].correctAnswer`)}
                          value="a"
                        >
                          Option A
                        </option>
                        <option
                          {...register(`questions[${index}].correctAnswer`)}
                          value="b"
                        >
                          Option B
                        </option>
                        <option
                          {...register(`questions[${index}].correctAnswer`)}
                          value="c"
                        >
                          Option C
                        </option>
                        <option
                          {...register(`questions[${index}].correctAnswer`)}
                          value="d"
                        >
                          Option D
                        </option>
                      </select>
                    </div>
                    {/* Delete button  */}
                    <div>
                      <button
                        onClick={() => remove(index)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        x Eliminar
                      </button>
                    </div>
                    <hr />
                  </div>
                );
              })}
              <button
                onClick={() =>
                  append({
                    id: "",
                    mainQuestion: "",
                    correctAnswer: "",
                    choices: {
                      a: "",
                      b: "",
                      c: "",
                      d: "",
                    },
                  })
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                + Añadir pregunta
              </button>
            </div>
          </>
        ) : (
          // Open de Box - Definitions
          <>
            <div>
              <h2>Definiciones (mínimo {minDefinitions})</h2>
              <Table key="id">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead>Palabra clave</TableHead>
                    <TableHead>Definición de coincidencia</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                {fields.map((item, index) => {
                  return (
                    <>
                      <TableBody key={index}>
                        <TableRow>
                          <TableCell
                            {...register(`definitions[${index}].id`)}
                            className="font-medium"
                          >
                            {index + 1}.
                          </TableCell>
                          <TableCell>
                            <input
                              type="text"
                              {...register(`definitions[${index}].keyword`)}
                              className="border border-gray-300 rounded-md"
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              type="text"
                              {...register(`definitions[${index}].definition`)}
                              className="border border-gray-300 rounded-md"
                            />
                          </TableCell>
                          <TableCell>
                            {/* Delete button  */}
                            <button
                              onClick={() => remove(index)}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-0 px-4 rounded h-8"
                            >
                              x Eliminar
                            </button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </>
                  );
                })}
              </Table>
              <button
                onClick={() =>
                  append({
                    id: "",
                    keyword: "",
                    definition: "",
                  })
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                + Añadir definición
              </button>
            </div>
          </>
        )}

        {/* Options */}
        <br />
        <h2>Opciones</h2>
        {/* Wallpapaer */}
        <br />
        <div>
          <h2>Fondo de pantalla</h2>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                {...register("wallpaperId")}
                value="classic"
              />
              Clásico
            </label>
            <label>
              <input type="radio" {...register("wallpaperId")} value="clouds" />
              Nubes
            </label>
          </div>
          <br />
        </div>
        {/* Sound */}
        <div>
          <h2>Sonido</h2>
          <div className="flex gap-4">
            <label>
              <input type="radio" {...register("isSound")} value="off" />
              Apagado
            </label>
            <label>
              <input type="radio" {...register("isSound")} value="on" />
              Encendido
            </label>
          </div>
          <br />
        </div>
        {/* Timer */}
        <div className="flex gap-4">
          <span>Minutero</span>
          <label>
            <input type="radio" {...register("isMinutes")} value="notMinutes" />
            Ninguno
          </label>
          <label>
            <input
              type="radio"
              {...register("isMinutes")}
              value="isChronometer"
            />
            Cuenta hacia arriba
          </label>
          <div>
            <label className="flex">
              <div className="mx-2">
                <input
                  type="radio"
                  {...register("isMinutes")}
                  value="isTimer"
                />
                <span> Cuenta regresiva</span>
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <input
                    className="w-12 border-solid border-2 border-gray-900"
                    type="number"
                    {...register("timerMinutes")}
                    max="59"
                    min="0"
                  />
                  <span>minutos</span>
                </div>
                <span className="mx-2">:</span>
                <div className="flex">
                  <div className="flex flex-col">
                    <input
                      className="w-12 border-solid border-2 border-gray-900"
                      type="number"
                      {...register("timerSeconds")}
                      max="59"
                      min="0"
                    />
                    <span>segundos</span>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        {/* End game */}
        <div className="flex gap-4">
          <span>Fin del juego</span>
          <input type="checkbox" {...register("isShowAnswers")} />
          <label htmlFor="">Mostrar respuestas</label>
        </div>
        {/* Submit button */}
        <br />
        <input
          type="submit"
          value="Guardar"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
};
