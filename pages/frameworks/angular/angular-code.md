## Custom input directive

```ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR, NG_VALIDATORS,
    AbstractControl,
    ValidationErrors, Validator
} from '@angular/forms';
import { ReleaseInfo } from '../../core/store/deployment/models/releases.model';

@Directive({
  selector: 'input[type=release]',
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: ReleaseInputDirective,
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useExisting: ReleaseInputDirective,
        multi: true,
    },
  ]
})
export class ReleaseInputDirective implements ControlValueAccessor {
  @HostListener("input", ["$event.target.value"]) onInput = (_: any) => {};

  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    private _renderer: Renderer2
  ) {}

  writeValue(value: ReleaseInfo | null): void {
    const release = value || new ReleaseInfo("");
    this._renderer.setAttribute(
      this._elementRef.nativeElement,
      "value",
      release.toString()
    );
  }


  registerOnChange(fn: any): void {
    this.onInput = (value: string) => {
      const release = new ReleaseInfo(value);
      fn(release);
    };
  }

  registerOnTouched(fn: any): void {}

  validate(control: AbstractControl): ValidationErrors | null {
    const release = control.value as ReleaseInfo;
    return release.name !== '' ? null : { release: true };
  }
}
```