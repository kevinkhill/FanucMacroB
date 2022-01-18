import MacroLexer from "../src/lexer/MacroLexer";
import MacroParser from "../src/parser/MacroParser";

const parser = new MacroParser();

function parseInput(text) {
  const lexingResult = MacroLexer.tokenize(text);
  // "input" is a setter which will reset the parser's state.
  parser.input = lexingResult.tokens;
  parser.Program();

  if (parser.errors.length > 0) {
    throw new Error("sad sad panda, Parsing errors detected");
  }

  return {
    lexingResult,
    errors: parser.errors
  };
}

const inputText = "X12.3523";

parseInput(inputText);
