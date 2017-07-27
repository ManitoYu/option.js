class Option {
	isEmpty() {
		throw new Error('abstract method')
	}
	get() {
		throw new Error('abstract method')
	}
}

class SomeOption extends Option {
	constructor(value) {
		super()

		const _value = value

		Object.defineProperty(this, 'value', {
			get: () => {
				return _value
			},
			set: () => {
				throw new Error('reassignment to option value')
			}
		})
	}

	isEmpty() {
		return false
	}

	get() {
		return this.value
	}
}

class NoneOption extends Option {
	isEmpty() {
		return true
	}

	get() {
		throw new Error('None.get')
	}
}

function Some(value) {
	return new SomeOption(value)
}

function None() {
	return new NoneOption()
}

var some = Some(1)
console.log(some.get())

var none = None()
console.log(none.get())