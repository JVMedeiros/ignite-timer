import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  FormContent,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <FormContent>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="task-suggestions">
            <option value="LLAMA 2" />
            <option value="NLP" />
            <option value="Estudo React" />
            <option value="Estudo React" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="numer"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContent>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </FormContainer>
    </HomeContainer>
  )
}
