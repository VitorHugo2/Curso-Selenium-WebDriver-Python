
import type { Courses } from '../types';

export const courses: Courses = {
  selenium: {
    title: 'Automação de Testes de UI com Selenium',
    modules: [
        {
          title: 'Módulo 1: Introdução e Setup',
          lessons: [
            {
              title: 'Boas-vindas e Objetivos',
              content: [
                { type: 'paragraph', content: 'Bem-vindo ao curso de automação de testes com Selenium e Python! Este guia foi projetado para capacitar equipes de QA a darem o próximo passo: automatizar testes manuais e integrar essa prática ao ciclo de desenvolvimento.' },
                { type: 'paragraph', content: 'Automatizar testes é uma habilidade essencial no mercado atual, capaz de transformar a qualidade e a velocidade das entregas de software em qualquer empresa.' },
                { type: 'subtitle', content: 'O que vamos aprender?' },
                {
                  type: 'list', content: [
                    'Configurar um ambiente de automação completo e profissional do zero.',
                    'Os fundamentos do Selenium WebDriver para interagir com navegadores de forma programática.',
                    'Estruturar testes de forma robusta e escalável com o framework PyTest.',
                    'Aplicar padrões de projeto como o Page Object Model (POM) para criar testes de fácil manutenção.',
                    'Gerar relatórios de teste claros e informativos para compartilhar com a equipe.',
                    'Focar em boas práticas e performance para um ambiente corporativo.'
                  ]
                },
                { type: 'paragraph', content: 'Ao final deste curso, sua equipe terá a confiança e o conhecimento necessários para iniciar e escalar um projeto de automação de testes web. Vamos começar!' }
              ]
            },
            {
              title: 'Configurando o Ambiente',
              content: [
                { type: 'paragraph', content: 'O primeiro passo é preparar nossa estação de trabalho. Precisamos do Python, do editor de código Visual Studio Code e do Selenium. O WebDriver, a ponte entre nosso código e o navegador, será gerenciado automaticamente.' },
                { type: 'subtitle', content: '1. Instalação do Python' },
                { type: 'paragraph', content: 'Se você ainda não tem o Python instalado, baixe a versão mais recente em <a href="https://python.org" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">python.org</a>. Durante a instalação no Windows, é crucial marcar a opção "Add Python to PATH".' },
                { type: 'paragraph', content: 'Para verificar a instalação, abra um terminal e digite:' },
                { type: 'code', language: 'bash', content: 'python --version\npip --version' },
                { type: 'subtitle', content: '2. Editor de Código: Visual Studio Code' },
                { type: 'paragraph', content: 'Recomendamos o uso do <strong>Visual Studio Code (VS Code)</strong>, um editor de código gratuito e poderoso. Você pode baixá-lo em <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">code.visualstudio.com</a>.'},
                { type: 'paragraph', content: 'Após a instalação, abra o VS Code e instale estas extensões essenciais para desenvolvimento Python:'},
                { type: 'list', content: [
                  '<strong>Python (Microsoft):</strong> Fornece IntelliSense (autocompletar), linting, depuração e muito mais.',
                  '<strong>Pylance (Microsoft):</strong> Melhora a experiência do IntelliSense com análise de tipo mais rápida e rica.',
                  '<strong>Python Indent:</strong> Ajuda a corrigir a indentação, que é fundamental em Python.'
                ]},
                { type: 'tip', content: 'É uma ótima prática usar ambientes virtuais para isolar as dependências de cada projeto. <br>Para criar: <code>python -m venv venv</code> <br>Para ativar no terminal do VS Code (Windows): <code>.\\venv\\Scripts\\activate</code> <br>Para ativar (Linux/Mac): <code>source venv/bin/activate</code>' },
                { type: 'subtitle', content: '3. Instalação da Biblioteca Selenium' },
                { type: 'paragraph', content: 'Com o ambiente virtual ativo no terminal do VS Code, instale o Selenium com um simples comando:' },
                { type: 'code', language: 'bash', content: 'pip install selenium' },
                { type: 'subtitle', content: '4. Gerenciamento do WebDriver' },
                { type: 'paragraph', content: 'Antigamente, era necessário baixar manualmente um arquivo chamado "WebDriver" (como o ChromeDriver) compatível com a versão do seu navegador. Isso era uma fonte comum de erros.' },
                { type: 'tip', content: '<strong>A Forma Moderna (Recomendada):</strong> A partir da versão 4.6, o Selenium vem com um componente chamado <strong>Selenium Manager</strong>. Ele detecta automaticamente a versão do seu navegador (Chrome, Firefox, Edge), baixa o WebDriver correto e o configura para você em segundo plano. Você não precisa fazer nada! Apenas instalar o Selenium já é suficiente.'},
                { type: 'paragraph', content: 'Saber que o processo manual existia é importante para entender como o Selenium funciona, mas para todos os fins práticos neste curso, confiaremos no gerenciamento automático, que é a abordagem profissional e mais eficiente.' },
                { type: 'warning', content: 'Em redes corporativas com firewalls ou proxies restritivos, o download automático do Selenium Manager pode ser bloqueado. Nesses casos raros, o download manual do WebDriver e a configuração via `Service` (o método antigo) podem ser necessários.' }
              ]
            },
            {
              title: 'Seu Primeiro Script',
              content: [
                { type: 'paragraph', content: 'Com tudo configurado, vamos escrever nosso primeiro script. Graças ao Selenium Manager, o código é incrivelmente simples. Ele irá abrir o Chrome, navegar para uma página e depois fechar.' },
                { type: 'paragraph', content: 'No VS Code, crie um arquivo chamado <code>primeiro_teste.py</code> e adicione o seguinte código:' },
                {
                  type: 'code', language: 'python', content: `
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# O Selenium Manager cuida do driver para nós!
# Esta linha simples abre uma nova janela do Chrome.
driver = webdriver.Chrome()

# Abre a página
driver.get("https://www.google.com")

# Maximiza a janela do navegador
driver.maximize_window()

# Imprime o título da página no console
print("Título da página:", driver.title)

# Aguarda 5 segundos para você ver a mágica acontecer
time.sleep(5)

# Fecha o navegador
driver.quit()

print("Script finalizado com sucesso!")
`
                },
                { type: 'paragraph', content: 'Execute o script no terminal do VS Code com: <code>python primeiro_teste.py</code>. Na primeira vez, pode haver um pequeno atraso enquanto o Selenium Manager baixa o driver. Depois, você verá uma janela do Chrome abrir, navegar para o Google e fechar. Parabéns, você executou sua primeira automação da forma mais moderna e eficiente!' },
                { type: 'tip', content: 'Você ainda verá códigos mais antigos usando um `Service Object` para apontar o caminho do driver. Embora ainda funcione, a forma `driver = webdriver.Chrome()` é a prática recomendada hoje em dia para a grande maioria dos casos.' }
              ]
            },
          ]
        },
        {
          title: 'Módulo 2: Fundamentos do Selenium',
          lessons: [
            {
              title: 'Localizando Elementos (Parte 1)',
              content: [
                { type: 'paragraph', content: 'A base da automação web é encontrar elementos na página (botões, campos de texto, links) para poder interagir com eles. O Selenium oferece várias estratégias para isso, chamadas de "locators".' },
                { type: 'tip', content: 'Use as Ferramentas de Desenvolvedor do seu navegador (atalho F12 ou clique com o botão direito -> Inspecionar) para encontrar os atributos dos elementos que você quer localizar. É uma ferramenta indispensável.'},
                { type: 'paragraph', content: 'Todos os métodos de busca retornam um objeto <code>WebElement</code>. A sintaxe geral é: <code>driver.find_element(By.STRATEGIA, "valor")</code>.' },
                { type: 'subtitle', content: 'Estratégias de Localização' },
                {
                  type: 'list', content: [
                    '<strong>By.ID</strong>: Busca por um atributo <code>id</code> único. É a forma mais rápida e confiável.',
                    '<strong>By.NAME</strong>: Busca pelo atributo <code>name</code>, comum em formulários.',
                    '<strong>By.CLASS_NAME</strong>: Busca por uma classe CSS. Cuidado se múltiplos elementos tiverem a mesma classe.',
                    '<strong>By.TAG_NAME</strong>: Busca por uma tag HTML, como <code>&lt;h1&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;div&gt;</code>.',
                    '<strong>By.LINK_TEXT</strong>: Busca um link (<code>&lt;a&gt;</code>) pelo seu texto exato.',
                    '<strong>By.PARTIAL_LINK_TEXT</strong>: Busca um link pelo seu texto parcial.'
                  ]
                },
                { type: 'subtitle', content: 'Exemplo Prático' },
                { type: 'paragraph', content: 'Vamos usar o site <a href="http://the-internet.herokuapp.com/login" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">the-internet.herokuapp.com/login</a> para praticar.' },
                {
                  type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("http://the-internet.herokuapp.com/login")

# Localizando por ID
campo_usuario = driver.find_element(By.ID, "username")

# Localizando por NAME
campo_senha = driver.find_element(By.NAME, "password")

# Localizando por TAG_NAME (o botão de submit é um <button>)
botao_login = driver.find_element(By.TAG_NAME, "button")

# Localizando por CLASS_NAME (o botão tem a classe 'radius')
# Nota: se houver mais de um, ele pegará o primeiro.
botao_pela_classe = driver.find_element(By.CLASS_NAME, "radius")

print(f"Elemento 'username' encontrado: {campo_usuario.is_displayed()}")
print(f"Elemento 'password' encontrado: {campo_senha.is_displayed()}")
print(f"Elemento 'button' encontrado: {botao_login.is_displayed()}")

time.sleep(3)
driver.quit()
`
                },
                { type: 'warning', content: 'Se o Selenium não encontrar o elemento, ele levantará uma exceção <code>NoSuchElementException</code> e o script irá parar. Veremos como lidar com isso de forma elegante mais tarde.' }
              ]
            },
            {
              title: 'Localizando Elementos (Parte 2)',
              content: [
                { type: 'paragraph', content: 'Agora vamos conhecer as duas estratégias de localização mais poderosas e flexíveis: Seletor CSS e XPath.' },
                { type: 'subtitle', content: 'By.CSS_SELECTOR' },
                { type: 'paragraph', content: 'Permite encontrar elementos usando seletores de CSS, os mesmos que os desenvolvedores frontend usam para estilizar a página. São rápidos e muito legíveis.' },
                {
                  type: 'list', content: [
                    'Por ID: <code>#username</code>',
                    'Por Classe: <code>.radius</code>',
                    'Por Tag e Atributo: <code>button[type="submit"]</code>',
                    'Hierarquia (filho direto): <code>#login > div > div > button</code>',
                    'Hierarquia (descendente): <code>div.example h3</code>'
                  ]
                },
                { type: 'subtitle', content: 'By.XPATH' },
                { type: 'paragraph', content: 'XPath (XML Path Language) é uma linguagem para navegar em documentos XML/HTML. É extremamente poderosa, mas pode ser mais lenta e complexa que seletores CSS.' },
                {
                  type: 'list', content: [
                    'Absoluto (não recomendado): <code>/html/body/div[2]/div/div/form/button</code>',
                    'Relativo: <code>//button[@type="submit"]</code>',
                    'Com base no texto: <code>//h2[text()="Login Page"]</code>',
                    'Navegação por eixos (avançado): <code>//label[text()="Username"]/following-sibling::input</code>'
                  ]
                },
                { type: 'tip', content: 'Prefira sempre ID > Name > CSS Selector > XPath. Use XPath como último recurso ou quando precisar de lógicas complexas, como localizar um elemento com base no texto de outro.' },
                { type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://the-internet.herokuapp.com/login")

# Usando CSS Selector
campo_usuario_css = driver.find_element(By.CSS_SELECTOR, "#username")
botao_login_css = driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]')

print(f"Campo usuário (CSS) encontrado: {campo_usuario_css.is_displayed()}")
print(f"Botão login (CSS) encontrado: {botao_login_css.is_displayed()}")

# Usando XPath
campo_senha_xpath = driver.find_element(By.XPATH, '//input[@name="password"]')
titulo_xpath = driver.find_element(By.XPATH, '//h2[text()="Login Page"]')

print(f"Campo senha (XPath) encontrado: {campo_senha_xpath.is_displayed()}")
print(f"Título (XPath) encontrado: {titulo_xpath.is_displayed()}")

driver.quit()
`
                },
              ]
            },
            {
              title: 'Interagindo com Elementos',
              content: [
                { type: 'paragraph', content: 'Depois de encontrar um elemento, o próximo passo é interagir com ele. As ações mais comuns são clicar, digitar texto e obter atributos.' },
                { type: 'subtitle', content: 'Principais Ações' },
                {
                  type: 'list', content: [
                    '<code>.click()</code>: Clica no elemento (botão, link, checkbox, etc).',
                    '<code>.send_keys("texto")</code>: Digita um texto em um campo de input ou textarea.',
                    '<code>.clear()</code>: Limpa o texto de um campo de input.',
                    '<code>.text</code>: Retorna o texto visível do elemento.',
                    '<code>.get_attribute("nome_do_atributo")</code>: Retorna o valor de um atributo (ex: "href" de um link).',
                    '<code>.is_displayed()</code>: Retorna <code>True</code> se o elemento está visível na página.',
                    '<code>.is_enabled()</code>: Retorna <code>True</code> se o elemento está habilitado para interação.',
                    '<code>.is_selected()</code>: Retorna <code>True</code> se o elemento (checkbox/radio button) está selecionado.'
                  ]
                },
                { type: 'subtitle', content: 'Exemplo de Login' },
                { type: 'paragraph', content: 'Vamos combinar localização e interação para realizar um login (com sucesso e falha).' },
                {
                  type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

# Tenta login com sucesso
driver.get("http://the-internet.herokuapp.com/login")
driver.find_element(By.ID, "username").send_keys("tomsmith")
driver.find_element(By.ID, "password").send_keys("SuperSecretPassword!")
driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

time.sleep(2)

# Verifica a mensagem de sucesso
mensagem_sucesso = driver.find_element(By.ID, "flash").text
print("Mensagem:", mensagem_sucesso)
assert "You logged into a secure area!" in mensagem_sucesso

# Faz logout
driver.find_element(By.CSS_SELECTOR, ".button.secondary.radius").click()
print("Logout realizado.")

time.sleep(2)

# Tenta login com falha
driver.find_element(By.ID, "username").send_keys("usuario_errado")
driver.find_element(By.ID, "password").send_keys("senha_errada")
driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

time.sleep(2)

# Verifica a mensagem de erro
mensagem_erro = driver.find_element(By.ID, "flash").text
print("Mensagem:", mensagem_erro)
assert "Your username is invalid!" in mensagem_erro

driver.quit()
`
                },
                { type: 'tip', content: 'A linha com <code>assert</code> é uma verificação. Se a condição for falsa, o programa irá falhar com um <code>AssertionError</code>. Esta é a forma mais simples de validar resultados em testes.' }
              ]
            }
          ]
        },
        {
          title: 'Módulo 3: Selenium Intermediário',
          lessons: [
              {
                  title: 'Esperas (Waits)',
                  content: [
                      { type: 'paragraph', content: 'Aplicações web modernas são dinâmicas. Elementos podem demorar para carregar ou aparecer na tela. Se nosso script tentar interagir com um elemento que ainda não existe, ele vai falhar. Para resolver isso, usamos "esperas".' },
                      { type: 'warning', content: 'Usar <code>time.sleep()</code> é uma péssima prática em testes reais. Isso cria esperas fixas ("hard coded") que deixam os testes lentos e instáveis. Se a rede estiver rápida, o teste espera sem necessidade. Se estiver lenta, o tempo pode não ser suficiente e o teste falha.' },
                      { type: 'subtitle', content: 'Espera Implícita (Implicit Wait)' },
                      { type: 'paragraph', content: 'Configurada uma vez no driver, ela define um tempo máximo que o Selenium vai esperar ao tentar encontrar QUALQUER elemento. Se o elemento aparecer antes, o script continua imediatamente.' },
                      { type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
# Configura o driver para esperar até 10 segundos antes de falhar
driver.implicitly_wait(10) 

# Agora, qualquer find_element vai esperar até 10s se o elemento não for encontrado
driver.get("http://the-internet.herokuapp.com/dynamic_loading/2")
driver.find_element(By.TAG_NAME, "button").click()

# A mensagem "Hello World!" leva um tempo para aparecer.
# A espera implícita aguardará até o elemento estar disponível.
mensagem = driver.find_element(By.ID, "finish").text
print(mensagem) # Output: Hello World!
driver.quit()
`},
                      { type: 'subtitle', content: 'Espera Explícita (Explicit Wait)' },
                      { type: 'paragraph', content: 'É a forma mais poderosa e recomendada. Você define uma espera para uma CONDIÇÃO específica em um ELEMENTO específico. O script pausa até que a condição seja verdadeira ou o tempo máximo seja atingido.' },
                      { type: 'paragraph', content: 'Para isso, usamos <code>WebDriverWait</code> junto com as <code>expected_conditions</code>.' },
                      { type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("http://the-internet.herokuapp.com/dynamic_loading/1")
driver.find_element(By.TAG_NAME, "button").click()

# Cria um objeto de espera de no máximo 10 segundos
wait = WebDriverWait(driver, 10)

# Espera até que o elemento com id 'finish' esteja visível
# Se a condição for atendida antes de 10s, o código continua.
# Se não, levanta uma exceção TimeoutException.
elemento_finish = wait.until(
    EC.visibility_of_element_located((By.ID, "finish"))
)

print(elemento_finish.text) # Output: Hello World!
driver.quit()
`},
                      { type: 'tip', content: 'Use esperas explícitas sempre que você souber que uma ação (como um clique) vai desencadear o aparecimento ou mudança de um elemento. Algumas condições úteis: <code>element_to_be_clickable</code>, <code>presence_of_element_located</code>, <code>invisibility_of_element_located</code>.' }
                  ]
              },
              {
                  title: 'Interações Avançadas',
                  content: [
                      { type: 'subtitle', content: 'Trabalhando com Dropdowns (Select)' },
                      { type: 'paragraph', content: 'Para elementos <code>&lt;select&gt;</code>, o Selenium oferece uma classe especial <code>Select</code> para facilitar a interação.' },
                      { type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

driver = webdriver.Chrome()
driver.get("http://the-internet.herokuapp.com/dropdown")

dropdown_element = driver.find_element(By.ID, "dropdown")
select = Select(dropdown_element)

# Selecionar por valor (atributo value)
select.select_by_value("1") 
time.sleep(1)

# Selecionar por texto visível
select.select_by_visible_text("Option 2")
time.sleep(1)

# Selecionar por índice (começa em 0, mas a primeira opção é "Please select...")
select.select_by_index(1) 
driver.quit()
`},
                      { type: 'subtitle', content: 'Lidando com Alertas' },
                      { type: 'paragraph', content: 'Alertas JavaScript (<code>alert</code>, <code>confirm</code>, <code>prompt</code>) bloqueiam a página e precisam ser tratados de forma específica.' },
                      { type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("http://the-internet.herokuapp.com/javascript_alerts")

# Clica no botão que gera o alerta
driver.find_element(By.XPATH, "//button[text()='Click for JS Alert']").click()
time.sleep(1)

# Muda o foco do driver para o alerta
alerta = driver.switch_to.alert

# Pega o texto do alerta e o aceita
print("Texto do alerta:", alerta.text)
alerta.accept() # Para "confirm" ou "prompt", poderia usar alerta.dismiss()
driver.quit()
`},
                      { type: 'subtitle', content: 'Múltiplas Janelas e Abas' },
                      { type: 'paragraph', content: 'Quando um link abre uma nova janela ou aba, o foco do driver permanece na original. Precisamos explicitamente mudar o foco.' },
                      { type: 'code', language: 'python', content: `
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("http://the-internet.herokuapp.com/windows")

janela_original = driver.current_window_handle
print("Janela original:", janela_original)

driver.find_element(By.LINK_TEXT, "Click Here").click()

# Espera até que haja mais de uma janela
wait = WebDriverWait(driver, 5)
wait.until(EC.number_of_windows_to_be(2))

# Itera sobre todas as janelas abertas
for handle in driver.window_handles:
    if handle != janela_original:
        driver.switch_to.window(handle)
        break

print("Título da nova janela:", driver.title)
driver.close() # Fecha a nova janela

# Volta para a janela original
driver.switch_to.window(janela_original)
print("Título da janela original:", driver.title)
driver.quit()
`}
                  ]
              }
          ]
        },
        {
          title: 'Módulo 4: Estruturando Testes com PyTest',
          lessons: [
              {
                  title: 'Introdução ao PyTest',
                  content: [
                      { type: 'paragraph', content: 'Até agora, fizemos scripts simples. Para um ambiente corporativo, precisamos de uma estrutura de testes (test framework). O PyTest é a escolha mais popular para Python por sua simplicidade e poder.' },
                      { type: 'subtitle', content: 'Por que usar um Framework?' },
                      { type: 'list', content: [
                          '<strong>Organização:</strong> Agrupa testes em arquivos e funções.',
                          '<strong>Reutilização de Código:</strong> Permite setup e teardown (configuração e limpeza) eficientes.',
                          '<strong>Relatórios:</strong> Gera relatórios detalhados sobre quais testes passaram ou falharam.',
                          '<strong>Assertivas Inteligentes:</strong> Fornece mais detalhes sobre falhas em <code>assert</code>.',
                          '<strong>Extensibilidade:</strong> Possui milhares de plugins (ex: para relatórios HTML, testes paralelos).'
                      ]},
                      { type: 'paragraph', content: 'Primeiro, vamos instalar o PyTest:' },
                      { type: 'code', language: 'bash', content: 'pip install pytest' },
                      { type: 'subtitle', content: 'Convenções do PyTest' },
                      { type: 'paragraph', content: 'O PyTest descobre e executa testes automaticamente se seguirmos algumas convenções:' },
                      { type: 'list', content: [
                          'Nomes de arquivos devem começar com <code>test_</code> ou terminar com <code>_test.py</code>.',
                          'Nomes de funções de teste devem começar com <code>test_</code>.'
                      ]},
                      { type: 'paragraph', content: 'Vamos converter nosso teste de login para o formato PyTest. Crie um arquivo <code>test_login.py</code>:' },
                      { type: 'code', language: 'python', content: `
# test_login.py

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Função de teste para login com sucesso
def test_login_sucesso():
    driver = webdriver.Chrome()
    driver.get("http://the-internet.herokuapp.com/login")

    driver.find_element(By.ID, "username").send_keys("tomsmith")
    driver.find_element(By.ID, "password").send_keys("SuperSecretPassword!")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    wait = WebDriverWait(driver, 5)
    mensagem_sucesso = wait.until(EC.visibility_of_element_located((By.ID, "flash")))
    
    assert "You logged into a secure area!" in mensagem_sucesso.text
    driver.quit()

# Função de teste para login com falha
def test_login_invalido():
    driver = webdriver.Chrome()
    driver.get("http://the-internet.herokuapp.com/login")

    driver.find_element(By.ID, "username").send_keys("usuario_invalido")
    driver.find_element(By.ID, "password").send_keys("senha_invalida")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    wait = WebDriverWait(driver, 5)
    mensagem_erro = wait.until(EC.visibility_of_element_located((By.ID, "flash")))
    
    assert "Your username is invalid!" in mensagem_erro.text
    driver.quit()
`},
                      { type: 'paragraph', content: 'Para executar, navegue até a pasta do projeto no terminal do VS Code e simplesmente digite:' },
                      { type: 'code', language: 'bash', content: 'pytest' },
                      { type: 'paragraph', content: 'O PyTest encontrará e executará ambas as funções. Você verá uma saída indicando que 2 testes passaram (passed).' }
                  ]
              },
              {
                  title: 'Fixtures: Setup e Teardown',
                  content: [
                      { type: 'paragraph', content: 'Percebeu a repetição de código nos testes anteriores? A inicialização e finalização do driver se repetem. Fixtures do PyTest resolvem isso de forma elegante.' },
                      { type: 'paragraph', content: 'Uma fixture é uma função que roda antes (e opcionalmente depois) de cada função de teste que a solicita. É ideal para preparar o ambiente, como abrir o navegador.' },
                      { type: 'subtitle', content: 'Criando uma Fixture para o Driver' },
                      { type: 'paragraph', content: 'Vamos criar um arquivo chamado <code>conftest.py</code> na raiz do nosso projeto de testes. O PyTest reconhece este arquivo automaticamente e disponibiliza as fixtures dele para todos os testes.' },
                      { type: 'code', language: 'python', content: `
# conftest.py
import pytest
from selenium import webdriver

@pytest.fixture
def driver():
    # --- SETUP ---
    # A inicialização agora é simples
    driver_instance = webdriver.Chrome()
    driver_instance.implicitly_wait(10) # Boa prática colocar a espera implícita aqui
    
    # "yield" entrega o objeto driver para o teste
    yield driver_instance
    
    # --- TEARDOWN ---
    # O código após o yield roda depois que o teste termina
    print("\\nFinalizando o teste...")
    driver_instance.quit()
`},
                      { type: 'subtitle', content: 'Usando a Fixture nos Testes' },
                      { type: 'paragraph', content: 'Agora, nosso arquivo <code>test_login.py</code> fica muito mais limpo. Basta adicionar o nome da fixture como um argumento para a função de teste.' },
                      { type: 'code', language: 'python', content: `
# test_login.py (versão refatorada)

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# O PyTest automaticamente injeta a fixture 'driver' aqui
def test_login_sucesso(driver):
    driver.get("http://the-internet.herokuapp.com/login")
    driver.find_element(By.ID, "username").send_keys("tomsmith")
    driver.find_element(By.ID, "password").send_keys("SuperSecretPassword!")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    wait = WebDriverWait(driver, 5)
    mensagem_sucesso = wait.until(EC.visibility_of_element_located((By.ID, "flash")))
    
    assert "You logged into a secure area!" in mensagem_sucesso.text

def test_login_invalido(driver):
    driver.get("http://the-internet.herokuapp.com/login")
    driver.find_element(By.ID, "username").send_keys("usuario_invalido")
    driver.find_element(By.ID, "password").send_keys("senha_invalida")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    wait = WebDriverWait(driver, 5)
    mensagem_erro = wait.until(EC.visibility_of_element_located((By.ID, "flash")))
    
    assert "Your username is invalid!" in mensagem_erro.text
`},
                      { type: 'tip', content: 'Fixtures podem ter escopos diferentes. O padrão é <code>scope="function"</code> (roda para cada função). Você pode mudar para <code>scope="session"</code> para que a fixture rode apenas uma vez por toda a sessão de testes, o que pode acelerar a execução, mas requer mais cuidado com o estado entre os testes.' }
                  ]
              }
          ]
        },
        {
          title: 'Módulo 5: Page Object Model (POM)',
          lessons: [
              {
                  title: 'O que é o Page Object Model?',
                  content: [
                      { type: 'paragraph', content: 'Conforme a aplicação cresce, seus testes também crescem. Manter localizadores e interações dentro dos arquivos de teste se torna um pesadelo. Se um ID de um botão mudar, você teria que alterá-lo em dezenas de testes.' },
                      { type: 'paragraph', content: 'O Page Object Model (POM) é um padrão de projeto que resolve isso. A ideia é criar uma classe para cada página (ou componente importante) da sua aplicação. Essa classe será responsável por:' },
                      { type: 'list', content: [
                          '<strong>Armazenar os localizadores</strong> dos elementos daquela página.',
                          '<strong>Conter os métodos</strong> que representam as interações do usuário com aquela página (ex: <code>fazer_login()</code>, <code>buscar_produto()</code>).'
                      ]},
                      { type: 'subtitle', content: 'Vantagens do POM' },
                      { type: 'list', content: [
                          '<strong>Manutenção Fácil:</strong> Se um localizador muda, você o altera em um único lugar (na classe da página).',
                          '<strong>Código Limpo e Legível:</strong> Os testes ficam focados no "o quê" (a lógica de negócio) em vez do "como" (detalhes de implementação do Selenium). Ex: <code>login_page.fazer_login("user", "pass")</code> é muito mais claro que uma sequência de <code>find_element</code> e <code>send_keys</code>.',
                          '<strong>Reutilização:</strong> Métodos de interação podem ser reutilizados por múltiplos testes.'
                      ]},
                      { type: 'warning', content: 'POM não é uma biblioteca, é um conceito, um padrão de organização de código. Ele traz uma camada de abstração entre o código de teste e o código da página.' }
                  ]
              },
              {
                  title: 'Implementando o POM',
                  content: [
                      { type: 'paragraph', content: 'Vamos refatorar nosso teste de login usando POM. Criaremos uma estrutura de pastas para organizar o projeto:' },
                      { type: 'code', language: 'bash', content: `
projeto_testes/
├── pages/
│   ├── __init__.py
│   └── login_page.py
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   └── test_login.py
`},
                      { type: 'subtitle', content: '1. Criando a Classe da Página de Login' },
                      { type: 'paragraph', content: 'Nesta classe, definimos os localizadores e os métodos de ação.' },
                      { type: 'code', language: 'python', content: `
# pages/login_page.py

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    # O construtor recebe a instância do driver
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(self.driver, 10) # Configura espera explícita
        
        # Mapeamento dos localizadores como tuplas (By, "valor")
        self.URL = "http://the-internet.herokuapp.com/login"
        self.USERNAME_INPUT = (By.ID, "username")
        self.PASSWORD_INPUT = (By.ID, "password")
        self.LOGIN_BUTTON = (By.CSS_SELECTOR, "button[type='submit']")
        self.FLASH_MESSAGE = (By.ID, "flash")

    # Métodos de ação
    def carregar(self):
        self.driver.get(self.URL)
        return self # Retornar self permite encadear métodos: page.carregar().fazer_login(...)

    def fazer_login(self, usuario, senha):
        self.driver.find_element(*self.USERNAME_INPUT).send_keys(usuario)
        self.driver.find_element(*self.PASSWORD_INPUT).send_keys(senha)
        self.driver.find_element(*self.LOGIN_BUTTON).click()
        return self

    def obter_mensagem_flash(self):
        # Usar espera explícita para garantir que a mensagem apareceu
        return self.wait.until(EC.visibility_of_element_located(self.FLASH_MESSAGE)).text
`},
                      { type: 'tip', content: 'O asterisco em <code>*self.USERNAME_INPUT</code> desempacota a tupla. É o mesmo que escrever <code>self.driver.find_element(By.ID, "username")</code>. Isso torna o código mais limpo e flexível.' },
                      { type: 'subtitle', content: '2. Refatorando o Teste' },
                      { type: 'paragraph', content: 'Agora, o arquivo de teste fica muito mais enxuto e focado na validação.' },
                      { type: 'code', language: 'python', content: `
# tests/test_login.py

from pages.login_page import LoginPage

def test_login_sucesso(driver):
    # Instancia o Page Object
    login_page = LoginPage(driver)
    
    # Executa as ações
    login_page.carregar()
    login_page.fazer_login("tomsmith", "SuperSecretPassword!")
    
    # Valida o resultado
    mensagem = login_page.obter_mensagem_flash()
    assert "You logged into a secure area!" in mensagem

# (O teste de login inválido seguiria a mesma estrutura)
def test_login_invalido(driver):
    login_page = LoginPage(driver)
    login_page.carregar().fazer_login("usuario_errado", "senha_errada")
    mensagem = login_page.obter_mensagem_flash()
    assert "Your username is invalid!" in mensagem
`},
                      { type: 'paragraph', content: 'Veja como o teste se tornou declarativo. Ele diz o que está fazendo, e não como está fazendo. Essa é a principal vantagem do POM.'}
                  ]
              }
          ]
        },
        {
          title: 'Módulo 6: Relatórios e CI/CD',
          lessons: [
              {
                  title: 'Gerando Relatórios HTML',
                  content: [
                      { type: 'paragraph', content: 'Executar testes no terminal é ótimo para desenvolvimento, mas em um ambiente corporativo, precisamos de relatórios visuais que possam ser compartilhados com a equipe, gerentes e stakeholders.' },
                      { type: 'paragraph', content: 'Um dos plugins mais populares para PyTest é o <code>pytest-html</code>, que gera um relatório HTML simples e eficaz.' },
                      { type: 'subtitle', content: 'Instalação e Uso' },
                      { type: 'code', language: 'bash', content: 'pip install pytest-html' },
                      { type: 'paragraph', content: 'Para gerar o relatório, basta adicionar uma flag ao comando de execução do PyTest:' },
                      { type: 'code', language: 'bash', content: 'pytest --html=report.html' },
                      { type: 'paragraph', content: 'Após a execução, um arquivo chamado <code>report.html</code> será criado na pasta raiz. Abra-o no navegador e você verá um resumo da execução, com detalhes de cada teste, tempo de execução e, o mais importante, as mensagens de erro para os testes que falharam.' },
                      { type: 'tip', content: 'Você pode customizar o relatório. Por exemplo, para incluir o log do console e ter um arquivo autocontido (com CSS e JS embutidos), use: <code>pytest --html=report.html --self-contained-html</code>.' },
                  ]
              },
              {
                  title: 'Integração Contínua (CI/CD)',
                  content: [
                      { type: 'paragraph', content: 'O objetivo final da automação de testes é integrá-la ao processo de desenvolvimento e entrega, um conceito conhecido como CI/CD (Integração Contínua / Entrega Contínua).' },
                      { type: 'subtitle', content: 'O que é CI/CD?' },
                      { type: 'list', content: [
                          '<strong>Integração Contínua (CI):</strong> A prática de mesclar as alterações de código de vários desenvolvedores em um repositório central várias vezes ao dia. Cada merge dispara uma "build" automática e a execução de testes (unitários, de integração e, claro, nossos testes de UI com Selenium).',
                          '<strong>Entrega Contínua (CD):</strong> A prática de, após os testes de CI passarem, automaticamente preparar o código para ser liberado para produção. A implantação final pode ser manual ou automática.'
                      ]},
                      { type: 'subtitle', content: 'Como os Testes Selenium se Encaixam?' },
                      { type: 'paragraph', content: 'Seus testes PyTest/Selenium podem ser executados em ferramentas de CI/CD como Jenkins, GitLab CI, GitHub Actions, etc. O fluxo típico é:' },
                      { type: 'list', content: [
                          '1. Um desenvolvedor envia um novo código.',
                          '2. O servidor de CI detecta a mudança e inicia um "job".',
                          '3. O job prepara um ambiente limpo (geralmente um contêiner Docker).',
                          '4. O job instala as dependências (<code>pip install -r requirements.txt</code>).',
                          '5. O job executa seus testes (<code>pytest --html=report.html</code>).',
                          '6. Se os testes passarem, o processo continua. Se falharem, a build é marcada como "quebrada" e a equipe é notificada.',
                          '7. Os relatórios gerados (<code>report.html</code>) são arquivados como "artefatos" da build, para que possam ser analisados.'
                      ]},
                      { type: 'tip', content: 'Para rodar em ambientes de CI, que geralmente não têm interface gráfica, você precisa executar o Chrome em modo "headless". Isso é feito passando uma opção para o driver:' },
                      { type: 'code', language: 'python', content: `
import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Em sua fixture no conftest.py
@pytest.fixture
def driver():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--window-size=1920,1080") # Importante para layout
    
    driver_instance = webdriver.Chrome(options=chrome_options)
    yield driver_instance
    driver_instance.quit()
`}
                  ]
              }
          ]
        },
        {
          title: 'Módulo 7: Boas Práticas e Próximos Passos',
          lessons: [
              {
                  title: 'Dicas para Testes Corporativos',
                  content: [
                      { type: 'subtitle', content: 'Gerenciamento de Dados de Teste' },
                      { type: 'paragraph', content: 'Evite "hard-codar" dados de teste (usuários, senhas, produtos) diretamente no código. Carregue-os de arquivos externos (JSON, YAML, CSV) ou use bibliotecas como a <code>faker</code> para gerar dados aleatórios.' },
                      { type: 'subtitle', content: 'Localizadores Robustos' },
                      { type: 'paragraph', content: 'Converse com a equipe de desenvolvimento. Peça para que adicionem atributos específicos para testes, como <code>data-testid="botao-login"</code>. Estes são menos propensos a mudar do que IDs e classes CSS usados para estilização. <code>By.CSS_SELECTOR("[data-testid=\'botao-login\']")</code> é extremamente robusto.' },
                      { type: 'subtitle', content: 'Screenshots em Caso de Falha' },
                      { type: 'paragraph', content: 'É muito útil tirar um print da tela no momento em que um teste falha. Você pode fazer isso em uma fixture no <code>conftest.py</code> que verifica o status do teste.' },
                      { type: 'subtitle', content: 'Não Teste Tudo na UI' },
                      { type: 'paragraph', content: 'Testes de UI são lentos e frágeis. Use-os para validar os fluxos críticos do usuário (login, compra, cadastro). Lógicas de negócio complexas e casos de borda devem ser testados em camadas mais baixas (testes de API, testes unitários). Lembre-se da pirâmide de testes.' },
                      { type: 'subtitle', content: 'Código Limpo e Comentado' },
                      { type: 'paragraph', content: 'Seu código de teste é código de produção. Ele precisa ser legível, bem organizado (POM!) e mantido com o mesmo rigor que o código da aplicação.' },
                  ]
              },
              {
                  title: 'Conclusão e Próximos Passos',
                  content: [
                      { type: 'paragraph', content: 'Parabéns por chegar ao final deste curso! Você percorreu um longo caminho, desde a configuração do ambiente até a criação de uma estrutura de testes robusta e profissional com PyTest e Page Object Model.' },
                      { type: 'subtitle', content: 'O que você conquistou:' },
                      { type: 'list', content: [
                          'Você sabe como controlar um navegador com Selenium e Python.',
                          'Você entende as melhores estratégias para localizar e interagir com elementos web.',
                          'Você consegue estruturar seus testes de forma limpa e manutenível usando PyTest e Fixtures.',
                          'Você domina o padrão de projeto Page Object Model para criar testes escaláveis.',
                          'Você sabe como gerar relatórios e entende o papel da automação em um pipeline de CI/CD.'
                      ]},
                      { type: 'subtitle', content: 'Para onde ir agora?' },
                      { type: 'list', content: [
                          '<strong>Paralelização:</strong> Investigue o plugin <code>pytest-xdist</code> para rodar seus testes em paralelo e reduzir drasticamente o tempo de execução.',
                          '<strong>Cross-Browser Testing:</strong> Adapte suas fixtures para rodar os mesmos testes em diferentes navegadores (Firefox, Edge) usando seus respectivos WebDrivers.',
                          '<strong>Relatórios Avançados:</strong> Explore o <a href="https://allurereport.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Allure Report</a>, que oferece dashboards muito mais ricos e interativos.',
                          '<strong>Automação de API:</strong> Muitas validações podem ser feitas mais rapidamente e de forma mais estável testando as APIs por trás da interface. Estude bibliotecas como <code>requests</code> e <code>pytest</code> para automação de API.',
                          '<strong>Cloud Testing:</strong> Para testar em centenas de combinações de navegadores/sistemas operacionais, explore serviços como BrowserStack ou Sauce Labs.'
                      ]},
                      { type: 'paragraph', content: 'O mais importante agora é <strong>praticar</strong>. Comece a aplicar esses conceitos no seu trabalho. Escolha um fluxo simples, automatize-o, mostre os resultados e, aos poucos, construa um conjunto de testes que agregue um valor imenso para sua equipe e sua empresa. Boa sorte na sua jornada de automação!' }
                  ]
              }
          ]
        }
    ]
  },
  api: {
    title: 'Automação de Testes de API com Python',
    modules: [
        {
            title: 'Módulo 1: Fundamentos de API',
            lessons: [
                {
                    title: 'O que é uma API?',
                    content: [
                        { type: 'paragraph', content: 'Bem-vindo ao curso de automação de testes de API! Enquanto os testes de UI validam a aplicação da perspectiva do usuário final, os testes de API validam a lógica de negócio na camada de serviços, onde os dados são processados. Eles são mais rápidos, mais estáveis e essenciais para uma estratégia de automação completa.' },
                        { type: 'subtitle', content: 'API: A Ponte de Comunicação' },
                        { type: 'paragraph', content: 'Uma API (Application Programming Interface) é um conjunto de regras e definições que permite que diferentes sistemas de software se comuniquem. Em desenvolvimento web, a mais comum é a <strong>API REST (Representational State Transfer)</strong>.' },
                        { type: 'paragraph', content: 'Pense na API como um garçom em um restaurante. Você (o cliente/frontend) faz um pedido (requisição) ao garçom (API), ele leva o pedido para a cozinha (servidor/backend), e traz de volta o prato pronto (resposta).' },
                        { type: 'subtitle', content: 'Componentes de uma Requisição REST' },
                        { type: 'list', content: [
                            '<strong>Endpoint (URL):</strong> O endereço para onde a requisição é enviada. Ex: <code>https://api.example.com/users</code>.',
                            '<strong>Método/Verbo HTTP:</strong> A ação que você quer realizar.',
                            '   - <code>GET</code>: Ler dados (Ex: buscar todos os usuários).',
                            '   - <code>POST</code>: Criar novos dados (Ex: cadastrar um novo usuário).',
                            '   - <code>PUT</code> / <code>PATCH</code>: Atualizar dados existentes.',
                            '   - <code>DELETE</code>: Remover dados.',
                            '<strong>Headers (Cabeçalhos):</strong> Metadados sobre a requisição, como o formato do conteúdo (<code>Content-Type: application/json</code>) e informações de autorização (tokens).',
                            '<strong>Body (Corpo):</strong> Os dados que você envia para o servidor, geralmente em formato JSON (para POST, PUT, PATCH).'
                        ]},
                        { type: 'subtitle', content: 'Anatomia de uma Resposta' },
                        { type: 'list', content: [
                            '<strong>Status Code:</strong> Um código numérico que indica o resultado da requisição. Essencial para os testes!',
                            '   - <code>2xx</code> (Sucesso): 200 OK, 201 Created.',
                            '   - <code>4xx</code> (Erro do Cliente): 400 Bad Request, 401 Unauthorized, 404 Not Found.',
                            '   - <code>5xx</code> (Erro do Servidor): 500 Internal Server Error.',
                            '<strong>Body (Corpo):</strong> Os dados retornados pelo servidor, geralmente em JSON.',
                        ]},
                        { type: 'tip', content: 'Antes de automatizar, explore a API que você vai testar usando ferramentas como o <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Postman</a> ou <a href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Insomnia</a>. Elas permitem que você faça requisições manualmente e entenda como a API funciona.'}
                    ]
                },
                {
                    title: 'Configurando o Ambiente para API',
                    content: [
                        { type: 'paragraph', content: 'O setup para testes de API é mais simples que o de UI, pois não precisamos de navegadores ou WebDrivers. Usaremos a biblioteca <code>requests</code>, um padrão de mercado em Python para fazer requisições HTTP.' },
                        { type: 'subtitle', content: '1. Ambiente Virtual' },
                        { type: 'paragraph', content: 'É crucial manter as dependências do projeto de API isoladas. Se você já tem um ambiente virtual do curso de Selenium, pode continuar usando, ou criar um novo para este projeto.' },
                        { type: 'code', language: 'bash', content: 'python -m venv venv_api\n# Ativação no Windows\n.\\venv_api\\Scripts\\activate\n# Ativação no Linux/Mac\nsource venv_api/bin/activate'},
                        { type: 'subtitle', content: '2. Instalando as Bibliotecas' },
                        { type: 'paragraph', content: 'Com o ambiente ativo, vamos instalar o <code>requests</code> para fazer as chamadas de API e o <code>pytest</code> para estruturar nossos testes.' },
                        { type: 'code', language: 'bash', content: 'pip install requests pytest'},
                        { type: 'paragraph', content: 'E, claro, vamos instalar o plugin de relatórios que já conhecemos:' },
                        { type: 'code', language: 'bash', content: 'pip install pytest-html'},
                        { type: 'subtitle', content: 'Estrutura do Projeto' },
                        { type: 'paragraph', content: 'Uma boa organização é fundamental. Sugerimos uma estrutura inicial como esta:'},
                        { type: 'code', language: 'bash', content: `
projeto_api_tests/
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   └── test_exemplo_api.py
├── requirements.txt
`},
                        { type: 'tip', content: 'Sempre gere um arquivo <code>requirements.txt</code> para que outros possam replicar seu ambiente facilmente. Comando: <code>pip freeze > requirements.txt</code>. Para instalar a partir dele: <code>pip install -r requirements.txt</code>.'},
                        { type: 'paragraph', content: 'Tudo pronto! Na próxima lição, faremos nossa primeira requisição para uma API pública.' }
                    ]
                }
            ]
        },
        {
            title: 'Módulo 2: Requisições com `requests`',
            lessons: [
                {
                    title: 'Requisição GET',
                    content: [
                        { type: 'paragraph', content: 'A operação mais comum em uma API é a busca de dados, realizada com o método GET. Vamos usar a API pública <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">JSONPlaceholder</a> para nossos exemplos.' },
                        { type: 'paragraph', content: 'Crie um arquivo <code>primeira_req.py</code> e adicione o código:'},
                        { type: 'code', language: 'python', content: `
import requests
import json

# URL do endpoint que lista todos os posts
url = "https://jsonplaceholder.typicode.com/posts"

# Faz a requisição GET
response = requests.get(url)

# O objeto 'response' contém todas as informações da resposta

# 1. Checar o Status Code
print(f"Status Code: {response.status_code}")

# 2. Acessar os Headers
print(f"Content-Type: {response.headers['Content-Type']}")

# 3. Acessar o Corpo (Body)
# .text retorna o corpo como string
# .json() decodifica o corpo JSON para um objeto Python (lista de dicionários)
posts = response.json()

# Imprime o primeiro post da lista
# Usamos json.dumps para formatar a saída e facilitar a leitura
print("\\nPrimeiro post:")
print(json.dumps(posts[0], indent=2))
`},
                        { type: 'paragraph', content: 'Execute o script com <code>python primeira_req.py</code>. Você verá o status code 200, o header de content-type e o primeiro post formatado. A mágica do <code>.json()</code> é que ele já converte a resposta para uma estrutura de dados nativa do Python, que podemos manipular e validar facilmente.' },
                        { type: 'subtitle', content: 'Buscando um Recurso Específico' },
                        { type: 'paragraph', content: 'Para buscar um item específico, geralmente adicionamos o ID na URL.'},
                        { type: 'code', language: 'python', content: `
import requests
import json

# Busca o post com ID = 1
url_post_1 = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url_post_1)

print(f"Status Code: {response.status_code}")

post = response.json()
print("\\nPost com ID 1:")
print(json.dumps(post, indent=2))
`},
                        { type: 'warning', content: 'Sempre verifique o status code antes de tentar processar a resposta. Se a requisição falhar (ex: um 404 Not Found), chamar <code>.json()</code> pode gerar um erro.'}
                    ]
                },
                {
                    title: 'Requisições POST, PUT, DELETE',
                    content: [
                        { type: 'paragraph', content: 'Agora vamos explorar os métodos que modificam dados no servidor.' },
                        { type: 'subtitle', content: 'POST: Criando um novo recurso' },
                        { type: 'paragraph', content: 'Para criar um novo post, precisamos enviar os dados no corpo (body) da requisição. A biblioteca <code>requests</code> converte um dicionário Python em JSON automaticamente se usarmos o parâmetro <code>json=</code>.'},
                        { type: 'code', language: 'python', content: `
import requests

url = "https://jsonplaceholder.typicode.com/posts"

# Dicionário com os dados do novo post
novo_post = {
    'title': 'Meu Título de Teste',
    'body': 'Este é o conteúdo do meu novo post.',
    'userId': 1
}

# Faz a requisição POST
response = requests.post(url, json=novo_post)

# O status code esperado para criação é 201 Created
print(f"Status Code: {response.status_code}")

# A API de exemplo retorna o objeto criado com um novo ID
print("Resposta:")
print(response.json())
`},
                        { type: 'subtitle', content: 'PUT: Atualizando um recurso' },
                        { type: 'paragraph', content: 'O método PUT é usado para substituir completamente um recurso existente. Precisamos especificar o ID do recurso na URL e enviar o corpo completo com as novas informações.' },
                        { type: 'code', language: 'python', content: `
import requests

# URL para o post com ID = 1
url = "https://jsonplaceholder.typicode.com/posts/1"

post_atualizado = {
    'id': 1,
    'title': 'Título Atualizado',
    'body': 'Conteúdo totalmente novo.',
    'userId': 1
}

response = requests.put(url, json=post_atualizado)

print(f"Status Code: {response.status_code}") # Esperado: 200 OK
print(response.json())
`},
                        { type: 'tip', content: 'Existe também o método <code>PATCH</code>, que é usado para atualizações parciais (enviar apenas os campos que você quer mudar), mas nem toda API o implementa.' },
                        { type: 'subtitle', content: 'DELETE: Removendo um recurso' },
                        { type: 'paragraph', content: 'O método DELETE é o mais simples. Ele não precisa de um corpo, apenas o ID do recurso a ser removido na URL.' },
                        { type: 'code', language: 'python', content: `
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"

response = requests.delete(url)

print(f"Status Code: {response.status_code}") # Esperado: 200 OK

# A resposta de um DELETE bem-sucedido geralmente tem um corpo vazio
print("Corpo da resposta:", response.text)
`},
                        { type: 'warning', content: 'A API JSONPlaceholder é apenas para testes, então ela "finge" que faz as alterações. Em uma API real, essas operações modificariam o banco de dados permanentemente.'}
                    ]
                }
            ]
        },
        {
            title: 'Módulo 3: Testes de API com PyTest',
            lessons: [
                {
                    title: 'Escrevendo seu Primeiro Teste',
                    content: [
                        { type: 'paragraph', content: 'Agora vamos unir o poder do <code>requests</code> com a estrutura do <code>pytest</code> para criar testes automatizados de API.' },
                        { type: 'paragraph', content: 'Crie um arquivo <code>tests/test_posts_api.py</code>. Lembre-se das convenções do PyTest (<code>test_</code> no nome do arquivo e das funções).' },
                        { type: 'subtitle', content: 'Teste para Listar Posts (GET)' },
                        { type: 'paragraph', content: 'Nosso primeiro teste vai verificar se o endpoint que lista todos os posts está funcionando corretamente.'},
                        { type: 'code', language: 'python', content: `
# tests/test_posts_api.py
import requests

BASE_URL = "https://jsonplaceholder.typicode.com"

def test_listar_todos_os_posts():
    # 1. Ação: Fazer a requisição
    response = requests.get(f"{BASE_URL}/posts")
    
    # 2. Verificação (Assertivas)
    
    # Verifica se o status code é 200 OK
    assert response.status_code == 200
    
    # Verifica se a resposta é uma lista (JSON)
    posts = response.json()
    assert isinstance(posts, list)
    
    # Verifica se a lista não está vazia
    assert len(posts) > 0
`},
                        { type: 'paragraph', content: 'Para rodar, vá ao terminal, navegue para a pasta <code>projeto_api_tests</code> e execute:'},
                        { type: 'code', language: 'bash', content: 'pytest'},
                        { type: 'paragraph', content: 'Você verá o PyTest encontrar e executar seu teste, resultando em "1 passed".'},
                        { type: 'subtitle', content: 'Teste para Obter um Post Específico' },
                        { type: 'paragraph', content: 'Este teste verifica se conseguimos buscar um post por seu ID e se os dados retornados estão corretos.' },
                        { type: 'code', language: 'python', content: `
# Dentro de tests/test_posts_api.py
def test_obter_post_por_id():
    post_id = 1
    response = requests.get(f"{BASE_URL}/posts/{post_id}")
    
    # Verifica o status code
    assert response.status_code == 200
    
    post = response.json()
    
    # Verifica se o tipo de dados é um dicionário
    assert isinstance(post, dict)
    
    # Verifica se o ID do post retornado é o correto
    assert post['id'] == post_id
    assert 'title' in post # Verifica se a chave 'title' existe no dicionário
    assert 'body' in post  # Verifica se a chave 'body' existe
`},
                        { type: 'tip', content: 'As assertivas do PyTest são muito poderosas. Se uma falhar, ele mostrará exatamente qual foi a condição que falhou e os valores envolvidos, facilitando muito a depuração.' }
                    ]
                },
                {
                    title: 'Testando a Criação de Posts (POST)',
                    content: [
                        { type: 'paragraph', content: 'Testar a criação de recursos envolve enviar dados e verificar se eles foram processados corretamente pelo servidor.' },
                        { type: 'subtitle', content: 'Teste de Criação com Sucesso' },
                        { type: 'code', language: 'python', content: `
# tests/test_posts_api.py
import requests

BASE_URL = "https://jsonplaceholder.typicode.com"

# (testes anteriores omitidos por brevidade)

def test_criar_novo_post():
    # Dados do novo post
    payload = {
        'title': 'Título de Teste via PyTest',
        'body': 'Conteúdo do post criado pelo teste automatizado.',
        'userId': 5
    }

    # Ação
    response = requests.post(f"{BASE_URL}/posts", json=payload)

    # Verificações
    
    # Verifica se o status code é 201 Created
    assert response.status_code == 201
    
    # Verifica o corpo da resposta
    novo_post = response.json()
    
    # A API de exemplo retorna os dados enviados e um novo ID
    assert novo_post['title'] == payload['title']
    assert novo_post['body'] == payload['body']
    assert novo_post['userId'] == payload['userId']
    assert 'id' in novo_post # Verifica se um ID foi atribuído
`},
                        { type: 'subtitle', content: 'Fixtures para Reutilização' },
                        { type: 'paragraph', content: 'A URL base (<code>BASE_URL</code>) está se repetindo. Vamos movê-la para uma fixture em <code>conftest.py</code> para centralizá-la.'},
                        { type: 'code', language: 'python', content: `
# tests/conftest.py
import pytest

@pytest.fixture(scope="session") # 'session' para rodar apenas uma vez
def base_url():
    return "https://jsonplaceholder.typicode.com"
`},
                        { type: 'paragraph', content: 'Agora podemos refatorar nossos testes para usar a fixture:'},
                        { type: 'code', language: 'python', content: `
# tests/test_posts_api.py (refatorado)
import requests

# A fixture 'base_url' será injetada automaticamente
def test_listar_todos_os_posts(base_url):
    response = requests.get(f"{base_url}/posts")
    assert response.status_code == 200
    
def test_criar_novo_post(base_url):
    payload = {
        'title': 'Título de Teste via PyTest',
        'body': 'Conteúdo do post criado pelo teste automatizado.',
        'userId': 5
    }
    response = requests.post(f"{base_url}/posts", json=payload)
    assert response.status_code == 201
    novo_post = response.json()
    assert novo_post['title'] == payload['title']
`},
                        { type: 'tip', content: 'Usar fixtures para URLs, dados de autenticação e outras configurações é uma excelente prática que torna seus testes mais limpos e fáceis de manter.'}
                    ]
                }
            ]
        },
        {
            title: 'Módulo 4: Tópicos Avançados',
            lessons: [
                {
                    title: 'Lidando com Autenticação',
                    content: [
                        { type: 'paragraph', content: 'A maioria das APIs do mundo real não é pública. Elas exigem alguma forma de autenticação para garantir que apenas usuários autorizados possam acessá-las.' },
                        { type: 'subtitle', content: 'Tipos Comuns de Autenticação' },
                        { type: 'list', content: [
                            '<strong>API Key:</strong> Uma chave simples enviada como um parâmetro de query (<code>?api_key=SUA_CHAVE</code>) ou em um header (<code>X-API-Key: SUA_CHAVE</code>).',
                            '<strong>Autenticação Básica (Basic Auth):</strong> Envia um nome de usuário e senha codificados em Base64 no header <code>Authorization</code>.',
                            '<strong>Bearer Token (OAuth 2.0 / JWT):</strong> O método mais moderno. Você primeiro se autentica em um endpoint de login, recebe um token de acesso temporário e o envia em todas as requisições subsequentes no header <code>Authorization: Bearer SEU_TOKEN</code>.'
                        ]},
                        { type: 'subtitle', content: 'Exemplo com Bearer Token' },
                        { type: 'paragraph', content: 'Vamos simular o uso de um Bearer Token com a API <a href="https://gorest.co.in/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">GoRest</a> (requer um cadastro rápido para obter um token).'},
                        { type: 'code', language: 'python', content: `
import requests
import os

# Prática recomendada: Nunca coloque tokens direto no código!
# Use variáveis de ambiente.
# No terminal (antes de rodar o pytest):
# Windows: set GOREST_TOKEN="seu_token_aqui"
# Linux/Mac: export GOREST_TOKEN="seu_token_aqui"
TOKEN = os.getenv("GOREST_TOKEN")

BASE_URL = "https://gorest.co.in/public/v2"

def test_acessar_recurso_protegido():
    if not TOKEN:
        pytest.skip("Token de acesso não configurado como variável de ambiente")

    headers = {
        "Authorization": f"Bearer {TOKEN}"
    }
    
    response = requests.get(f"{BASE_URL}/users", headers=headers)
    
    assert response.status_code == 200
    print("\\nUsuários encontrados com sucesso!")
`},
                        { type: 'warning', content: '<strong>Segurança é fundamental.</strong> NUNCA comite tokens, senhas ou chaves de API para o seu repositório de código (Git). Sempre use variáveis de ambiente ou sistemas de gerenciamento de segredos.'},
                        { type: 'tip', content: 'Você pode criar uma fixture em <code>conftest.py</code> para gerar os headers de autorização, evitando repetir esse código em todos os testes que precisam de autenticação.' }
                    ]
                },
                {
                    title: 'Validação de Schema',
                    content: [
                        { type: 'paragraph', content: 'Além de verificar valores específicos na resposta de uma API, é crucial garantir que a ESTRUTURA da resposta (o "contrato" da API) não mudou inesperadamente. Isso é chamado de validação de schema.'},
                        { type: 'paragraph', content: 'Se um desenvolvedor remover um campo ou mudar seu tipo de dado (de número para string, por exemplo), isso pode quebrar a aplicação cliente. Nossos testes devem pegar esse tipo de problema.'},
                        { type: 'subtitle', content: 'Usando a Biblioteca `jsonschema`' },
                        { type: 'paragraph', content: 'Primeiro, instale a biblioteca:'},
                        { type: 'code', language: 'bash', content: 'pip install jsonschema' },
                        { type: 'paragraph', content: 'Agora, vamos definir um schema para o nosso objeto "post" e validar a resposta da API contra ele.'},
                        { type: 'code', language: 'python', content: `
import requests
from jsonschema import validate
import pytest

BASE_URL = "https://jsonplaceholder.typicode.com"

# Define a estrutura esperada para um objeto Post
POST_SCHEMA = {
    "type": "object",
    "properties": {
        "userId": {"type": "number"},
        "id": {"type": "number"},
        "title": {"type": "string"},
        "body": {"type": "string"},
    },
    "required": ["userId", "id", "title", "body"]
}

def test_schema_de_um_post():
    response = requests.get(f"{BASE_URL}/posts/1")
    post_data = response.json()
    
    # A função validate() levanta uma exceção se a validação falhar
    try:
        validate(instance=post_data, schema=POST_SCHEMA)
    except Exception as e:
        pytest.fail(f"Validação de schema falhou: {e}")

def test_schema_da_lista_de_posts():
    response = requests.get(f"{BASE_URL}/posts")
    posts_lista = response.json()
    
    # Define um schema que espera uma lista (array), onde cada item
    # deve seguir o schema de post definido anteriormente.
    LISTA_POSTS_SCHEMA = {
        "type": "array",
        "items": POST_SCHEMA
    }
    
    try:
        validate(instance=posts_lista, schema=LISTA_POSTS_SCHEMA)
    except Exception as e:
        pytest.fail(f"Validação de schema da lista falhou: {e}")
`},
                        { type: 'tip', content: 'Manter schemas em arquivos JSON separados e carregá-los nos testes é uma ótima maneira de organizar projetos grandes. Isso também permite que os schemas sejam compartilhados entre as equipes de frontend, backend e QA.'}
                    ]
                }
            ]
        }
    ]
  }
};
