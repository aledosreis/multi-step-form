import { useState } from "react";
import { Input } from "./components/Input";

function App() {
  const [step, setStep] = useState(1);

  function previousStep() {
    setStep(step - 1);
  }

  function nextStep() {
    setStep(step + 1);
  }

  return (
    <main>
      <div className="form-wrapper">
        <div className="form-steps">
          <span
            className={step === 1 ? "current" : step > 1 ? "done" : ""}
            data-step="1"
          >
            Contato
          </span>

          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_408_260)">
              <path
                d="M8.41663 5L13.4166 10L8.41663 15"
                stroke="#323238"
                stroke-width="2"
                stroke-linecap="square"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_408_260">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                ></rect>
              </clipPath>
            </defs>
          </svg>

          <span
            className={step === 2 ? "current" : step > 2 ? "done" : ""}
            data-step="2"
          >
            Empresa
          </span>

          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_408_260)">
              <path
                d="M8.41663 5L13.4166 10L8.41663 15"
                stroke="#323238"
                stroke-width="2"
                stroke-linecap="square"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_408_260">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                ></rect>
              </clipPath>
            </defs>
          </svg>

          <span
            className={step === 3 ? "current" : step > 3 ? "done" : ""}
            data-step="3"
          >
            Projeto
          </span>
        </div>

        <div className="divider"></div>

        <div className={`inputs step-1 ${step !== 1 ? "hidden" : ""}`}>
          <Input
            label="Nome"
            placeholder="Como prefere ser chamado"
            fieldId="name"
            field="input"
          />
          <Input
            label="Telefone"
            placeholder="Digite seu número de WhatsApp"
            fieldId="phone"
            field="input"
          />
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            fieldId="email"
            field="input"
          />
        </div>

        <div className={`inputs step-2 ${step !== 2 ? "hidden" : ""}`}>
          <Input
            label="Nome da empresa"
            placeholder="Qual é o nome da empresa"
            fieldId="enterprise-name"
            field="input"
          />

          <Input
            label="Número de funcionários"
            placeholder="Digite o número de colaboradores"
            fieldId="employee-number"
            field="input"
          />

          <Input
            label="Sobre seu negócio"
            placeholder="Fale um pouco sobre seus produtos ou serviços"
            fieldId="about"
            field="textarea"
          />
        </div>

        <div className={`inputs step-3 ${step !== 3 ? "hidden" : ""}`}>
          <Input
            label="Objetivos do projeto"
            placeholder="Descreva quais os objetivos desse projeto"
            fieldId="objectives"
            field="textarea"
          />
        </div>

        <div className="buttons">
          <button
            className={step === 1 ? "hidden" : ""}
            id="outline"
            onClick={previousStep}
          >
            Voltar
          </button>
          <button
            className={step === 3 ? "hidden" : ""}
            id="next"
            onClick={nextStep}
          >
            Continuar
          </button>
          <button className={step !== 3 ? "hidden" : ""} id="finish">
            Enviar proposta
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
