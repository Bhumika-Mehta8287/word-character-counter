// Get elements
const inputText = document.getElementById('input-text');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');

// Function to count words and characters
function updateCount() {
  const text = inputText.value;

  // Count words (split by spaces, newlines, etc.)
  const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  // Count characters
  const characters = text.length;

  // Update word and character count in UI
  wordCount.textContent = words;
  charCount.textContent = characters;
}

// Listen to input events to update counts
inputText.addEventListener('input', updateCount);
