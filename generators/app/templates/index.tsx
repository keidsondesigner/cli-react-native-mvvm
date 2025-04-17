import <%= name %>View from './View';
import { <%= name %>Model } from './Model';
import { use<%= name %>ViewModel } from './ViewModel';

// Exporta o componente View como padrão para manter a compatibilidade com as importações existentes
export default <%= name %>View;

// Exporta os outros componentes da arquitetura MVVM para uso quando necessário
export { <%= name %>Model, use<%= name %>ViewModel };