HTMLCanvasElement.prototype.getContext = () => {
  return {
    fillRect: jest.fn()
  }
}
