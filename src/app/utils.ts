export function readFile(file: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject();
    reader.readAsText(file);
  });
}

export function findSources(stackTrace: string) {
  const matches = /https?:\/\/[^:]+/g.exec(stackTrace);
  const result = [];
  matches.forEach(it => {
    if (!result.includes(it)) {
      result.push(it);
    }
  });
  return result;
}
