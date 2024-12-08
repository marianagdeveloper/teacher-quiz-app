import {useFieldArray, useForm} from "react-hook-form";
import {quizzes} from "../data";
// import {NestedFieldArray} from "../components/NestedFieldArray";
// import {FieldArray} from "../components/FieldArray";

export const CreateQuiz = () => {
  const {
    register,
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      questions: [
        {
          id: "",
          mainQuestion: "",
          correctAnswer: "", // index
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
      template: "cuestionario", //TODO
    },
  });

  const {fields, append, remove} = useFieldArray({control, name: "questions"});

  const onSubmit = data => {
    console.log(quizzes.length);
    console.log(quizzes);

    console.log(data);
    data.id = quizzes.length + 1;
    console.log(data);
    quizzes.push(data);
    console.log(quizzes);
  };

  return (
    <div>
      <h2>Nuevo examen</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title  */}
        <div>
          <label htmlFor="title">Titulo del examen</label>
          <input
            type="text"
            {...register("title", {required: true, maxLength: 10})}
            className="border border-gray-300 rounded-md"
          />
          {errors.title?.type === "required" && (
            <p>El título del examen es requerido </p>
          )}
        </div>
        <br />
        {/* Questions */}
        <div>
          <h2>Pregunta(s)</h2>
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
                  <input
                    type="text"
                    {...register(`questions[${index}].correctAnswer`, {
                      required: true,
                      maxLength: 1,
                    })}
                    className="border border-gray-300 rounded-md"
                  />
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
                correctAnswer: "", // index
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
