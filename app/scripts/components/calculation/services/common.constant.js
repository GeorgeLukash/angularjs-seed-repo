angular.module('app.Calculate')
    .constant('commonConst', {
        initArray: [
            {
                isValid: false,
                name: 'Ford',
                order: 0,
                color: 'red',
                desc: {
                    data: 'some data 01',
                    someNewValue: {
                        superText: 'One two three',
                        hyperText: {
                            id: '7777'
                        }
                    }
                }
            },
            {
                isValid: true,
                name: 'Mitsubishi',
                order: 1,
                color: 'green',
                desc: {
                    data: 'some data 02',
                    someNewValue: {
                        superText: 'I am happy!',
                        hyperText: {
                            id: '88888'
                        }
                    }
                }
            },
            {
                isValid: true,
                name: 'Volvo',
                order: 2,
                color: 'blue',
                desc: {
                    data: 'some data 03',
                    someNewValue: {
                        superText: 'Kill me!',
                        hyperText: {
                            id: '123321'
                        }
                    }
                }
            }
        ]
    });
