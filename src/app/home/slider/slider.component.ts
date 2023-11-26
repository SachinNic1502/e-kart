import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  imagesWithText = [
    {
      image: 'https://discountstore.pk/wp-content/uploads/2023/03/buy-laptop-online-in-Pakistan.png',
      text: 'Text for the first image.'
    },
    {
      image: 'https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200',
      text: 'Text for the second image.'
    },
    {
      image: 'https://discountstore.pk/wp-content/uploads/2022/09/Best-Laptops-in-Pakistan.jpg',
      text: 'Text for the third image.'
    }
  ];
  currentIndex = 0;

  private intervalId: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.showNext();
    }, 5000); // Adjust the interval duration (in milliseconds) as needed
  }

  stopAutoPlay(): void {
    clearInterval(this.intervalId);
  }

  selectImage(index: number): void {
    this.currentIndex = index;
    this.stopAutoPlay(); // Stop auto-play when the user manually selects an image
  }

  showNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imagesWithText.length;
  }

  showPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imagesWithText.length) % this.imagesWithText.length;
  }
}
