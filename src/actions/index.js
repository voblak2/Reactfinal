export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const replace = count => ({
type: 'RESET',
count
});

export const onCount = count => ({
type: 'CHANGE',
count 
});