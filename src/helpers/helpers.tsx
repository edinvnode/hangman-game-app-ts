// Define a type for the setter function
export function showNotification(setter: (value: boolean) => void) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

// Correct typings for the checkWin function
export function checkWin(
  correct: string[],
  wrong: string[],
  word: string
): string {
  let status = "win";

  // Check for win
  word.split("").forEach((letter) => {
    if (correct.indexOf(letter) === -1) {
      status = "";
    }
  });

  // Check for lose
  if (wrong.length === 6) status = "lose";

  return status;
}
