mandatory = () => { throw new Error('Thiếu tham số!'); }
sample = (param1 = mandatory()) => param1