export const translations = {
  tr: {
    nav: {
      about: 'Hakkımızda',
      services: 'Hizmetlerimiz',
      projects: 'Projeler',
      innovation: 'İnovasyon',
      contact: 'İletişim',
      blog: 'Blog',
    },
    home: {
      welcome: 'EPIT\'e Hoş Geldiniz',
      subtitle: 'Mühendislik mükemmelliğimizi ve yenilikçi çözümlerimizi keşfedin.',
    },
    about: {
      title: 'Hakkımızda',
      description: 'EPIT\'e hoş geldiniz. Biz, müşterilerimize yenilikçi çözümler ve üstün hizmet sunmaya adanmış bir inşaat mühendisliği şirketiyiz.',
    },
    services: {
      title: 'Hizmetler',
      sections: [
        {
          title: 'Yapısal Tasarım ve Mühendislik Hizmetleri',
          subsections: [
            {
              title: 'Erken Aşamalarda Tasarım',
              items: [
                'Erken aşamalarda yapısal tasarım ve alternatif sistem değerlendirmesi, geliştirilmesi',
                'Form bulma ve optimizasyon ile büyük açıklıklı kabuk yapılardan çatı örtülerini çeşitli yapısal malzemeler ile tasarlamak',
                'Çeşitli yapısal malzemeler ve kompozit elemanlar ile aynı projede çalışarak kompleks bağlantıların çözülmesi',
                'Fizibilite çalışmaları, ön tasarım ve teklif aşamaları için malzeme keşif listeleri hazırlanması',
                'Tarihi yapıların deprem için değerlendirilmesi, destekleme, güçlendirme, yapısal restorasyon tasarımlarının yapılması'
              ]
            },
            {
              title: 'Etkin ve Detaylı, Uygulamaya Dönük Mühendislik',
              items: [
                'Yüksek ve narin kulelerin beton ve çelik ile tasarımı ve optimizasyonu',
                'Detaylı analiz ve değerlendirme çalışmaları'
              ]
            }
          ]
        },
        {
          title: 'İnşaat Sırasında Mühendislik ve Saha Mesleki Kontrol Mühendislik Hizmetleri',
          subsections: [
            {
              title: 'İnşa Edilebilirlik Planlaması ve Modellenmesi',
              items: [
                'Kompleks inşaat metodlarının 3D modellenerek analiz edilmesi dolayısıyla senaryo ve sıralama çalışmaları yapılması',
                'Geçici askı sistemleri ile tarihi yapıların desteklenmesi ve diğer mevcut veya iksa yapılarının geçici mesnet sistemlerinin tasarımı'
              ]
            },
            {
              title: 'Mesleki Kontrol',
              items: [
                'Masif ve lamine ahşap elemanların veya mevcut ahşapların EuroNorm\'lara göre yapısal sınıflandırılması',
                'Saha mesleki kontrol, gözlem ve raporlama hizmeti ile proje dokumanlarına ve yönetmeliklere uygunluk kontrol hizmeti'
              ]
            }
          ]
        }
      ]
    }
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      innovation: 'Innovation',
      contact: 'Contact',
      blog: 'Blog',
    },
    home: {
      welcome: 'Welcome to EPIT',
      subtitle: 'Discover our engineering excellence and innovative solutions.',
    },
    about: {
      title: 'About Us',
      description: 'Welcome to EPIT. We are a civil engineering company dedicated to delivering innovative solutions and exceptional service to our clients.',
    },
    services: {
      title: 'Services',
      sections: [
        {
          title: 'Structural Design and Engineering Services',
          subsections: [
            {
              title: 'Early Stage Design',
              items: [
                'Structural design and alternative system evaluation, development in early stages',
                'Designing roof coverings from large-span shell structures with various structural materials through form finding and optimization',
                'Solving complex connections by working with various structural materials and composite elements in the same project',
                'Preparation of material quantity surveys for feasibility studies, preliminary design and proposal stages',
                'Evaluation of historical buildings for earthquakes, support, strengthening, structural restoration designs'
              ]
            },
            {
              title: 'Effective and Detailed, Application-Oriented Engineering',
              items: [
                'Design and optimization of high and slender towers with concrete and steel',
                'Detailed analysis and evaluation studies'
              ]
            }
          ]
        },
        {
          title: 'Engineering During Construction and Site Professional Control Engineering Services',
          subsections: [
            {
              title: 'Constructability Planning and Modeling',
              items: [
                '3D modeling and analysis of complex construction methods, thus scenario and sequencing studies',
                'Supporting historical buildings with temporary suspension systems and design of temporary support systems for other existing or retaining structures'
              ]
            },
            {
              title: 'Professional Control',
              items: [
                'Structural classification of massive and laminated timber elements or existing timber according to EuroNorms',
                'Site professional control, observation and reporting service with project documents and compliance control service with regulations'
              ]
            }
          ]
        }
      ]
    }
  },
}

export type Language = 'tr' | 'en' 